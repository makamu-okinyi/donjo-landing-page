# Render Deployment Troubleshooting

## Common Error: Status 127

**Error:** `Exited with status 127 while building your code`

**Cause:** This usually means a command wasn't found or the build process failed.

## Solutions

### 1. Check Build Command

Make sure your Render service has:
- **Build Command:** `npm install && npm run build`
- **Start Command:** `node server/index.js`

### 2. Verify Node.js Version

Render should use Node.js 18 or higher. Check in Render dashboard:
- Settings → Environment → Node Version
- Should be `18.x.x` or higher

### 3. Check Build Logs

Look at the build logs in Render dashboard:
- If you see "vite: command not found" → Build dependencies aren't installing
- If you see "dist folder not found" → Build didn't complete

### 4. Manual Render Setup (if render.yaml isn't working)

1. Go to Render Dashboard
2. Create New → Web Service
3. Connect your GitHub repo
4. Configure:
   - **Name:** donjo-landing-page
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `node server/index.js`
   - **Node Version:** 18
5. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `PORT` = `10000` (Render sets this automatically, but you can specify)

### 5. Alternative: Use Railway Instead

Railway is often easier for full-stack apps:
1. Go to [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select your repo
4. Railway auto-detects and deploys
5. Done!

### 6. Verify Package.json Scripts

Make sure your `package.json` has:
```json
{
  "scripts": {
    "build": "vite build",
    "start": "node server/index.js"
  }
}
```

### 7. Check File Structure

Make sure these files exist:
- `server/index.js`
- `package.json`
- `vite.config.js`

### 8. Test Build Locally First

Before deploying, test locally:
```bash
npm install
npm run build
node server/index.js
```

Visit `http://localhost:3001` - should work!

## Still Having Issues?

1. Check Render's build logs for specific error messages
2. Try deploying to Railway instead (often more reliable)
3. Make sure all dependencies are in `package.json`
4. Verify Node.js version compatibility

