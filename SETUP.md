# Donjo Landing Page - Setup Guide

## Installation

1. Install all dependencies:
```bash
npm install
```

This will install both frontend and backend dependencies including:
- React and Vite (frontend)
- Express and SQLite (backend)

## Running the Application

### Option 1: Run Both Frontend and Backend Together (Recommended)
```bash
npm run dev:all
```

This will start:
- Frontend on `http://localhost:5173`
- Backend API on `http://localhost:3001`

### Option 2: Run Separately

**Terminal 1 - Backend Server:**
```bash
npm run dev:server
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## Database

The SQLite database is automatically created in `server/data/waitlist.db` when the server starts.

The database stores:
- Email addresses
- User type (employer or applicant)
- Company name (optional, for employers)
- Timestamps

## API Endpoints

- `POST /api/waitlist/add` - Add email to waitlist
- `GET /api/waitlist/all` - Get all entries
- `GET /api/waitlist/stats` - Get statistics
- `GET /api/waitlist/check/:email` - Check if email exists
- `GET /api/health` - Health check

See `server/README.md` for detailed API documentation.

## Environment Variables

Create a `.env` file in the root directory (optional):
```
VITE_API_URL=http://localhost:3001/api
PORT=3001
```

## Troubleshooting

1. **Port already in use**: Change the PORT in `.env` or `server/index.js`
2. **Database errors**: Delete `server/data/waitlist.db` and restart the server
3. **CORS errors**: Make sure the backend is running on port 3001

