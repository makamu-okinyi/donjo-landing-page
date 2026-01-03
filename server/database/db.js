import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure data directory exists
const dataDir = join(__dirname, '..', 'data');
if (!existsSync(dataDir)) {
    mkdirSync(dataDir, { recursive: true });
}

// Database file path
const dbPath = join(dataDir, 'waitlist.json');

// Initialize database file if it doesn't exist
if (!existsSync(dbPath)) {
    writeFileSync(dbPath, JSON.stringify([], null, 2), 'utf8');
}

// Database operations
const db = {
    // Read all entries
    getAll() {
        try {
            const data = readFileSync(dbPath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading database:', error);
            return [];
        }
    },

    // Write all entries
    saveAll(entries) {
        try {
            writeFileSync(dbPath, JSON.stringify(entries, null, 2), 'utf8');
            return true;
        } catch (error) {
            console.error('Error writing database:', error);
            return false;
        }
    },

    // Add new entry
    add(entry) {
        const entries = this.getAll();
        
        // Check for duplicate email
        const exists = entries.find(e => e.email.toLowerCase() === entry.email.toLowerCase());
        if (exists) {
            throw new Error('DUPLICATE_EMAIL');
        }

        const newEntry = {
            id: entries.length > 0 ? Math.max(...entries.map(e => e.id)) + 1 : 1,
            email: entry.email.toLowerCase().trim(),
            user_type: entry.user_type,
            company_name: entry.company_name || null,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };

        entries.push(newEntry);
        this.saveAll(entries);
        return newEntry;
    },

    // Find by email
    findByEmail(email) {
        const entries = this.getAll();
        return entries.find(e => e.email.toLowerCase() === email.toLowerCase());
    },

    // Get all entries with optional filter
    find(filter = {}) {
        let entries = this.getAll();

        if (filter.user_type) {
            entries = entries.filter(e => e.user_type === filter.user_type);
        }

        if (filter.limit) {
            entries = entries.slice(0, parseInt(filter.limit));
        }

        if (filter.offset) {
            entries = entries.slice(parseInt(filter.offset));
        }

        return entries;
    },

    // Get count
    count(filter = {}) {
        let entries = this.getAll();

        if (filter.user_type) {
            entries = entries.filter(e => e.user_type === filter.user_type);
        }

        return entries.length;
    }
};

console.log('✅ Database initialized successfully (JSON storage)');

export default db;

