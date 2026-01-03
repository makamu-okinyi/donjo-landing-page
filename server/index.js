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
    console.log(`🔍 Looking for dist folder at: ${distPath}`);
    
    if (existsSync(distPath)) {
        app.use(express.static(distPath));
        
        // Handle React routing - return index.html for all non-API routes
        app.get('*', (req, res) => {
            // Don't serve index.html for API routes
            if (req.path.startsWith('/api')) {
                return res.status(404).json({ error: 'API endpoint not found' });
            }
            const indexPath = join(distPath, 'index.html');
            if (existsSync(indexPath)) {
                res.sendFile(indexPath);
            } else {
                res.status(500).json({ error: 'Frontend build not found' });
            }
        });
        
        console.log('📦 Serving production build from dist/');
    } else {
        console.error('❌ Production mode but dist/ folder not found!');
        console.error('   Expected path:', distPath);
        console.error('   Current working directory:', process.cwd());
        console.error('   __dirname:', __dirname);
        
        // Still allow API to work even if frontend build is missing
        app.get('*', (req, res) => {
            if (req.path.startsWith('/api')) {
                return res.status(404).json({ error: 'API endpoint not found' });
            }
            res.status(500).json({ 
                error: 'Frontend build not found',
                message: 'Please run "npm run build" before starting the server'
            });
        });
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

