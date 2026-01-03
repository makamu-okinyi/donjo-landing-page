# Mobile Access Guide

## How to Access the App from Your Mobile Phone

### Prerequisites
1. Your mobile phone and computer must be on the **same Wi-Fi network**
2. Both frontend and backend servers must be running

### Steps

1. **Find your computer's IP address:**

   **Windows:**
   ```bash
   ipconfig
   ```
   Look for "IPv4 Address" under your active network adapter (usually starts with 192.168.x.x or 10.0.x.x)

   **Mac/Linux:**
   ```bash
   ifconfig | grep "inet "
   ```
   or
   ```bash
   ip addr show
   ```

2. **Start the servers:**
   ```bash
   npm run dev:all
   ```
   Or run separately:
   ```bash
   # Terminal 1 - Backend
   npm run dev:server
   
   # Terminal 2 - Frontend
   npm run dev
   ```

3. **Access from mobile:**
   - Open your mobile browser
   - Go to: `http://YOUR_COMPUTER_IP:5173`
   - Example: `http://192.168.1.100:5173`

4. **The app should now work on your mobile device!**

### Troubleshooting

**If you still get "Failed to fetch" errors:**

1. **Check firewall settings:**
   - Windows: Allow Node.js through Windows Firewall
   - Make sure ports 5173 (frontend) and 3001 (backend) are not blocked

2. **Verify both servers are running:**
   - Frontend should show: `Local: http://localhost:5173/`
   - Backend should show: `🚀 Server running on http://localhost:3001`

3. **Check network:**
   - Ensure mobile and computer are on the same Wi-Fi network
   - Try disabling VPN if active

4. **Try using your computer's hostname:**
   - Sometimes `http://COMPUTER_NAME.local:5173` works better

### Production Deployment

For production, you'll need to:
- Deploy the backend to a server (e.g., Heroku, Railway, AWS)
- Update `VITE_API_URL` environment variable to point to your production API
- Deploy the frontend to a hosting service (e.g., Vercel, Netlify)

