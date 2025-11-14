# Troubleshooting Guide

## 🐛 Common Issues and Solutions

### Issue 1: Browser shows "Cannot GET /" or blank page

**Symptoms:**
- Backend seems to be running
- Frontend seems to be running
- But browser shows error or blank page

**Solutions:**

1. **Check if frontend is actually running:**
   ```bash
   # In frontend terminal, you should see:
   # "Compiled successfully!"
   # "Local: http://localhost:3000"
   ```

2. **Check if backend is running:**
   ```bash
   # In backend terminal, you should see:
   # "Server running on port 5000"
   # "MongoDB Connected"
   ```

3. **Open the correct URL:**
   - Frontend: http://localhost:3000 (NOT 5000)
   - Backend API: http://localhost:5000

4. **Check browser console (F12):**
   - Look for errors in Console tab
   - Check Network tab for failed requests

---

### Issue 2: "MongoDB connection error"

**Symptoms:**
- Backend shows: "MongoDB connection error"
- Server starts but API calls fail

**Solutions:**

**Option A: Install and Start Local MongoDB**

1. **Download MongoDB:**
   - Windows: https://www.mongodb.com/try/download/community
   - Install MongoDB Community Server

2. **Start MongoDB:**
   ```bash
   # MongoDB usually runs as a Windows service
   # Check Services (services.msc) for "MongoDB"
   # Or start manually:
   mongod
   ```

**Option B: Use MongoDB Atlas (Cloud - Easier)**

1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster (free tier)
4. Click "Connect" → "Connect your application"
5. Copy connection string
6. Update `backend/.env`:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/jobportal?retryWrites=true&w=majority
   ```
   Replace `username` and `password` with your Atlas credentials

---

### Issue 3: "Port 5000 already in use" or "Port 3000 already in use"

**Symptoms:**
- Error: "EADDRINUSE: address already in use"

**Solutions:**

1. **Find and kill the process:**
   ```powershell
   # For port 5000 (Backend)
   netstat -ano | findstr :5000
   taskkill /PID <PID_NUMBER> /F
   
   # For port 3000 (Frontend)
   netstat -ano | findstr :3000
   taskkill /PID <PID_NUMBER> /F
   ```

2. **Or change the port:**
   - Backend: Change `PORT=5001` in `backend/.env`
   - Frontend: Create `frontend/.env` with `PORT=3001`

---

### Issue 4: "Cannot find module" errors

**Symptoms:**
- Error: "Cannot find module 'express'" or similar

**Solutions:**

1. **Reinstall dependencies:**
   ```bash
   # Delete node_modules and package-lock.json
   cd backend
   rmdir /s /q node_modules
   del package-lock.json
   npm install
   
   cd ../frontend
   rmdir /s /q node_modules
   del package-lock.json
   npm install
   ```

---

### Issue 5: Frontend shows "Network Error" or "Failed to fetch"

**Symptoms:**
- Frontend loads but can't connect to backend
- API calls fail

**Solutions:**

1. **Check backend is running:**
   - Visit http://localhost:5000/api/health
   - Should see: `{"status":"OK","message":"Job Portal API is running"}`

2. **Check CORS:**
   - Backend should have CORS enabled (already in code)
   - Make sure backend URL in frontend is correct

3. **Check firewall:**
   - Windows Firewall might be blocking Node.js
   - Allow Node.js through firewall

---

### Issue 6: "react-scripts: command not found"

**Symptoms:**
- Frontend won't start
- Error about react-scripts

**Solutions:**

```bash
cd frontend
npm install react-scripts --save
npm start
```

---

### Issue 7: Blank page or "Loading..." forever

**Symptoms:**
- Page loads but shows only "Loading..."

**Solutions:**

1. **Check browser console (F12):**
   - Look for JavaScript errors
   - Check Network tab for failed API calls

2. **Check if backend is responding:**
   ```bash
   # In browser or Postman:
   GET http://localhost:5000/api/health
   ```

3. **Clear browser cache:**
   - Press Ctrl+Shift+Delete
   - Clear cache and reload

---

## ✅ Step-by-Step Verification

### Step 1: Verify Backend
```bash
cd backend
npm run dev
```
**Expected output:**
```
✅ MongoDB Connected Successfully
🚀 Server running on port 5000
🌐 API URL: http://localhost:5000
```

### Step 2: Test Backend API
Open browser: http://localhost:5000/api/health
**Expected:** JSON response with status OK

### Step 3: Verify Frontend
```bash
cd frontend
npm start
```
**Expected output:**
```
Compiled successfully!
Local: http://localhost:3000
```

### Step 4: Open Frontend
Open browser: http://localhost:3000
**Expected:** Home page with "Find Your Dream Job Today"

---

## 🔍 Still Not Working?

1. **Check all terminal windows:**
   - Backend terminal should show server running
   - Frontend terminal should show "Compiled successfully"

2. **Check file structure:**
   - Make sure `backend/.env` exists
   - Make sure all files are in correct folders

3. **Check Node.js version:**
   ```bash
   node --version
   # Should be v14 or higher
   ```

4. **Try these commands in order:**
   ```bash
   # Stop all processes (Ctrl+C in both terminals)
   
   # Clean install
   cd backend
   npm install
   
   cd ../frontend
   npm install
   
   # Start backend
   cd ../backend
   npm run dev
   
   # In new terminal, start frontend
   cd frontend
   npm start
   ```

---

## 📞 Need More Help?

Check the console output in both terminals for specific error messages. The error messages will tell you exactly what's wrong!

