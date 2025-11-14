# 🚀 START HERE - Quick Fix Guide

## ⚡ Quick Steps to Get It Running

### 1️⃣ Check What's Happening

**Open TWO terminal windows:**

**Terminal 1 - Backend:**
```powershell
cd "c:\projects\capston project\backend"
npm run dev
```

**What you should see:**
```
✅ MongoDB Connected Successfully
🚀 Server running on port 5000
🌐 API URL: http://localhost:5000
```

**If you see MongoDB error:**
- Don't worry! Server will still run
- But you need MongoDB for the app to work
- See "MongoDB Setup" below

---

**Terminal 2 - Frontend:**
```powershell
cd "c:\projects\capston project\frontend"
npm start
```

**What you should see:**
```
Compiled successfully!

You can now view job-portal-frontend in the browser.

  Local:            http://localhost:3000
```

---

### 2️⃣ Open Browser

**Go to:** http://localhost:3000

**NOT** http://localhost:5000 (that's the backend API)

---

### 3️⃣ If It's Still Not Working

#### Problem: Backend won't start

**Check:**
- Are you in the `backend` folder?
- Did you run `npm install` in backend?
- Is port 5000 already in use?

**Fix:**
```powershell
cd "c:\projects\capston project\backend"
npm install
npm run dev
```

---

#### Problem: Frontend won't start

**Check:**
- Are you in the `frontend` folder?
- Did you run `npm install` in frontend?
- Is port 3000 already in use?

**Fix:**
```powershell
cd "c:\projects\capston project\frontend"
npm install
npm start
```

---

#### Problem: MongoDB Connection Error

**Option A: Use MongoDB Atlas (EASIEST - Recommended)**

1. Go to: https://www.mongodb.com/cloud/atlas
2. Sign up (free)
3. Create a cluster (free tier)
4. Click "Connect" → "Connect your application"
5. Copy the connection string
6. Edit `backend/.env`:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/jobportal?retryWrites=true&w=majority
   ```
   Replace `username` and `password` with your Atlas credentials

7. Restart backend server

**Option B: Install Local MongoDB**

1. Download: https://www.mongodb.com/try/download/community
2. Install MongoDB
3. It should start automatically as a Windows service
4. Restart backend server

---

#### Problem: Browser shows blank page or error

**Check Browser Console (Press F12):**
- Look for red errors
- Check Network tab for failed requests

**Common fixes:**
1. Make sure backend is running (check Terminal 1)
2. Make sure frontend is running (check Terminal 2)
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try a different browser

---

### 4️⃣ Test If Everything Works

1. **Test Backend:**
   - Open: http://localhost:5000/api/health
   - Should see: `{"status":"OK","message":"Job Portal API is running"}`

2. **Test Frontend:**
   - Open: http://localhost:3000
   - Should see: "Find Your Dream Job Today" page

3. **Test Full Flow:**
   - Register as Employer → Post a job
   - Register as Job Seeker → Browse jobs → Apply

---

## 📋 Checklist

- [ ] Backend terminal shows "Server running on port 5000"
- [ ] Frontend terminal shows "Compiled successfully"
- [ ] http://localhost:5000/api/health works
- [ ] http://localhost:3000 shows the home page
- [ ] MongoDB is connected (or using Atlas)

---

## 🆘 Still Stuck?

1. **Check both terminals for error messages**
2. **Read TROUBLESHOOTING.md for detailed solutions**
3. **Check browser console (F12) for JavaScript errors**

---

## ✅ Success Looks Like This:

**Terminal 1 (Backend):**
```
✅ MongoDB Connected Successfully
🚀 Server running on port 5000
```

**Terminal 2 (Frontend):**
```
Compiled successfully!
Local: http://localhost:3000
```

**Browser:**
- Shows beautiful home page with "Find Your Dream Job Today"

---

**You're all set! 🎉**

