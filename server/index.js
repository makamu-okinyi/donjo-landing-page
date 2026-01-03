import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';
import waitlistRoutes from './routes/waitlist.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middleware
const corsOptions = {
    origin: NODE_ENV === 'production' 
        ? process.env.ALLOWED_ORIGINS?.split(',') || true 
        : true, // Allow all origins in development
    credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/waitlist', waitlistRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running', environment: NODE_ENV });
});

// Serve static files from React app in production
if (NODE_ENV === 'production') {
    const distPath = join(__dirname, '..', 'dist');
    if (existsSync(distPath)) {
        app.use(express.static(distPath));
        
        // Handle React routing - return index.html for all non-API routes
        app.get('*', (req, res) => {
            // Don't serve index.html for API routes
            if (req.path.startsWith('/api')) {
                return res.status(404).json({ error: 'API endpoint not found' });
            }
            res.sendFile(join(distPath, 'index.html'));
        });
        
        console.log('📦 Serving production build from dist/');
    } else {
        console.warn('⚠️  Production mode but dist/ folder not found. Run "npm run build" first.');
    }
}

// Start server
const host = NODE_ENV === 'production' ? '0.0.0.0' : '0.0.0.0';
app.listen(PORT, host, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 Database initialized`);
    console.log(`🌍 Environment: ${NODE_ENV}`);
    if (NODE_ENV === 'development') {
        console.log(`📱 Local access: http://localhost:${PORT}`);
        console.log(`📱 Mobile access: Use your computer's IP address on port ${PORT}`);
    } else {
        console.log(`🌐 Production server ready`);
    }
});

