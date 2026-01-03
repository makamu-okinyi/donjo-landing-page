# Deployment Guide

This guide will help you deploy the Donjo landing page so it works for **any mobile user** anywhere in the world.

## Quick Deploy Options

### Option 1: Railway (Recommended - Easiest)

Railway can host both frontend and backend together.

1. **Sign up at [railway.app](https://railway.app)**

2. **Create a new project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub repository

3. **Configure the project:**
   - Railway will auto-detect Node.js
   - Add environment variable: `NODE_ENV=production`
   - The start command will be: `npm run start` (or `npm run start:win` on Windows)

4. **Deploy:**
   - Railway will automatically build and deploy
   - You'll get a public URL like: `https://your-app.railway.app`

5. **Update API URL:**
   - In Railway dashboard, go to Settings → Variables
   - Add: `VITE_API_URL=https://your-app.railway.app/api`
   - Redeploy

**Railway automatically:**
- Builds your React app
- Runs the Express server
- Provides HTTPS
- Handles database persistence

---

### Option 2: Render (Free Tier Available)

1. **Sign up at [render.com](https://render.com)**

2. **Create a Web Service:**
   - Connect your GitHub repo
   - **OR** use the `render.yaml` file (auto-detected)
   - If manual setup:
     - Build Command: `npm install && npm run build`
     - Start Command: `node server/index.js`
     - Environment: `Node`
     - Node Version: `18` or higher

3. **Add Environment Variables:**
   - `NODE_ENV=production`
   - `PORT=10000` (Render uses port 10000 automatically)

4. **Important:** Make sure the build completes successfully. Check build logs for errors.

4. **Deploy:**
   - Render will build and deploy
   - You'll get: `https://your-app.onrender.com`

---

### Option 3: Vercel (Frontend) + Railway/Render (Backend)

**Deploy Frontend to Vercel:**

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Build settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Environment Variables:
   - `VITE_API_URL=https://your-backend-url.com/api`
5. Deploy

**Deploy Backend separately:**
- Use Railway or Render (see options above)
- Update `VITE_API_URL` in Vercel to point to your backend

---

### Option 4: Heroku

1. **Install Heroku CLI:**
   ```bash
   npm install -g heroku
   ```

2. **Login and create app:**
   ```bash
   heroku login
   heroku create your-app-name
   ```

3. **Set environment variables:**
   ```bash
   heroku config:set NODE_ENV=production
   ```

4. **Deploy:**
   ```bash
   git push heroku main
   ```

---

## Manual Deployment Steps

### 1. Build the Frontend

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### 2. Test Production Build Locally

```bash
npm run start
```

Visit `http://localhost:3001` - the server will serve both API and frontend.

### 3. Deploy to Your Chosen Platform

Follow the platform-specific instructions above.

---

## Environment Variables for Production

Set these in your hosting platform:

```env
NODE_ENV=production
PORT=3001
VITE_API_URL=https://your-domain.com/api
ALLOWED_ORIGINS=https://your-domain.com,https://www.your-domain.com
```

---

## Database Persistence

The JSON database file (`server/data/waitlist.json`) will be stored on the server's filesystem.

**For production, consider:**
- Using a proper database (PostgreSQL, MongoDB) for better reliability
- Setting up automated backups
- Using environment variables for database configuration

---

## Post-Deployment Checklist

- [ ] Test the waitlist form on mobile
- [ ] Verify API endpoints are working
- [ ] Check that HTTPS is enabled
- [ ] Test from different mobile devices/networks
- [ ] Set up monitoring/error tracking
- [ ] Configure custom domain (optional)

---

## Troubleshooting

**"Failed to fetch" on mobile:**
- Check that `VITE_API_URL` is set correctly
- Ensure CORS is configured properly
- Verify the backend is accessible

**Database not persisting:**
- Check file permissions on the server
- Ensure `server/data/` directory exists
- Verify write permissions

**Build fails:**
- Check Node.js version (should be 18+)
- Ensure all dependencies are in `package.json`
- Check build logs for specific errors

---

## Need Help?

- Check platform-specific documentation
- Review server logs in your hosting dashboard
- Test API endpoints using: `https://your-domain.com/api/health`

