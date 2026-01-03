# Donjo Waitlist API Server

Backend server for managing the Donjo waitlist database.

## Database Schema

The waitlist table stores:
- `id`: Auto-incrementing primary key
- `email`: Unique email address (required)
- `user_type`: Either 'employer' or 'applicant' (required)
- `company_name`: Optional company name (for employers)
- `created_at`: Timestamp when entry was created
- `updated_at`: Timestamp when entry was last updated

## API Endpoints

### POST `/api/waitlist/add`
Add a new email to the waitlist.

**Request Body:**
```json
{
  "email": "user@example.com",
  "userType": "employer" | "applicant",
  "companyName": "Company Name" // optional, only for employers
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully added to waitlist",
  "id": 1
}
```

### GET `/api/waitlist/all`
Get all waitlist entries.

**Query Parameters:**
- `userType` (optional): Filter by 'employer' or 'applicant'
- `limit` (optional): Limit number of results
- `offset` (optional): Offset for pagination

**Response:**
```json
{
  "success": true,
  "data": [...],
  "total": 100,
  "count": 10
}
```

### GET `/api/waitlist/stats`
Get waitlist statistics.

**Response:**
```json
{
  "success": true,
  "stats": {
    "total": 100,
    "employers": 45,
    "applicants": 55,
    "recent": 10
  }
}
```

### GET `/api/waitlist/check/:email`
Check if an email exists in the waitlist.

**Response:**
```json
{
  "success": true,
  "exists": true,
  "data": {...}
}
```

## Running the Server

```bash
# Install dependencies
npm install

# Run server only
npm run dev:server

# Run both frontend and backend
npm run dev:all
```

The server runs on `http://localhost:3001` by default.

## Database Location

The SQLite database is stored in `server/data/waitlist.db`.

