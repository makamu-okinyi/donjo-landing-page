import express from 'express';
import db from '../database/db.js';

const router = express.Router();

// Add email to waitlist
router.post('/add', (req, res) => {
    try {
        const { email, userType, companyName } = req.body;

        // Validation
        if (!email || !userType) {
            return res.status(400).json({ 
                error: 'Email and user type are required' 
            });
        }

        if (!['employer', 'applicant'].includes(userType)) {
            return res.status(400).json({ 
                error: 'Invalid user type. Must be "employer" or "applicant"' 
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                error: 'Invalid email format' 
            });
        }

        // Insert into database
        const result = db.add({
            email: email.toLowerCase().trim(),
            user_type: userType,
            company_name: companyName ? companyName.trim() : null
        });

        res.status(201).json({
            success: true,
            message: 'Successfully added to waitlist',
            id: result.id
        });

    } catch (error) {
        // Handle duplicate email
        if (error.message === 'DUPLICATE_EMAIL') {
            return res.status(409).json({
                error: 'This email is already on the waitlist'
            });
        }

        console.error('Error adding to waitlist:', error);
        res.status(500).json({
            error: 'Failed to add to waitlist',
            message: error.message
        });
    }
});

// Get all waitlist entries
router.get('/all', (req, res) => {
    try {
        const { userType, limit, offset } = req.query;

        const filter = {};
        if (userType && ['employer', 'applicant'].includes(userType)) {
            filter.user_type = userType;
        }
        if (limit) {
            filter.limit = limit;
        }
        if (offset) {
            filter.offset = offset;
        }

        let entries = db.find(filter);
        
        // Sort by created_at descending
        entries = entries.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        const total = db.count({ user_type: userType });

        res.json({
            success: true,
            data: entries,
            total: total,
            count: entries.length
        });

    } catch (error) {
        console.error('Error fetching waitlist:', error);
        res.status(500).json({
            error: 'Failed to fetch waitlist',
            message: error.message
        });
    }
});

// Get statistics
router.get('/stats', (req, res) => {
    try {
        const allEntries = db.getAll();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const stats = {
            total: allEntries.length,
            employers: db.count({ user_type: 'employer' }),
            applicants: db.count({ user_type: 'applicant' }),
            recent: allEntries.filter(entry => new Date(entry.created_at) >= sevenDaysAgo).length
        };

        res.json({
            success: true,
            stats
        });

    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({
            error: 'Failed to fetch statistics',
            message: error.message
        });
    }
});

// Check if email exists
router.get('/check/:email', (req, res) => {
    try {
        const { email } = req.params;
        const entry = db.findByEmail(email);

        if (entry) {
            res.json({
                success: true,
                exists: true,
                data: entry
            });
        } else {
            res.json({
                success: true,
                exists: false
            });
        }

    } catch (error) {
        console.error('Error checking email:', error);
        res.status(500).json({
            error: 'Failed to check email',
            message: error.message
        });
    }
});

export default router;

