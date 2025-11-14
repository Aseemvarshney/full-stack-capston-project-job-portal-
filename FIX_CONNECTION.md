# Fix: "Failed to fetch jobs" Error

## 🔴 The Problem
Your frontend can't connect to the backend server on port 5000.

## ✅ The Solution

### Step 1: Start Backend Server

**Open a NEW terminal/PowerShell window:**

```powershell
cd "c:\projects\capston project\backend"
npm run dev
```

**You MUST see this output:**
```
✅ MongoDB Connected Successfully
🚀 Server running on port 5000
🌐 API URL: http://localhost:5000
```

### Step 2: Verify Backend is Running

**Open your browser and go to:**
```
http://localhost:5000/api/health
```

**You should see:**
```json
{"status":"OK","message":"Job Portal API is running"}
```

**If you see an error:**
- Backend is NOT running
- Go back to Step 1

### Step 3: Test Jobs Endpoint

**In browser, go to:**
```
http://localhost:5000/api/jobs
```

**You should see:**
- JSON array with jobs
- If empty array `[]`, run seed script (see below)
- If error, backend has issues

### Step 4: Start Frontend (in NEW terminal)

**Keep backend running, open NEW terminal:**
```powershell
cd "c:\projects\capston project\frontend"
npm start
```

### Step 5: Test in Browser

1. Go to: http://localhost:3000
2. Click "Browse Jobs"
3. Jobs should appear!

## 🎯 Quick Checklist

- [ ] Backend terminal shows "Server running on port 5000"
- [ ] http://localhost:5000/api/health works
- [ ] http://localhost:5000/api/jobs shows jobs
- [ ] Frontend terminal shows "Compiled successfully"
- [ ] http://localhost:3000 opens
- [ ] Browse Jobs page shows jobs

## 🐛 Common Issues

### Issue 1: "Port 5000 already in use"

**Fix:**
```powershell
# Find process using port 5000
netstat -ano | findstr :5000

# Kill it (replace PID)
taskkill /PID <PID> /F

# Then start backend again
cd backend
npm run dev
```

### Issue 2: Backend starts but MongoDB error

**This is OK!** Backend will still work, but you need MongoDB for jobs.

**Fix:**
- Install MongoDB locally, OR
- Use MongoDB Atlas (free cloud)
- Update `backend/.env` with connection string

### Issue 3: "Cannot find module"

**Fix:**
```powershell
cd backend
npm install
npm run dev
```

### Issue 4: No jobs showing

**Run seed script:**
```powershell
cd backend
npm run seed
```

## 📞 Still Not Working?

1. **Check both terminals are running:**
   - Terminal 1: Backend (port 5000)
   - Terminal 2: Frontend (port 3000)

2. **Check browser console (F12):**
   - Look for error messages
   - Check Network tab for failed requests

3. **Verify URLs:**
   - Backend: http://localhost:5000
   - Frontend: http://localhost:3000
   - NOT the other way around!

## ✅ Success Looks Like:

**Backend Terminal:**
```
✅ MongoDB Connected Successfully
🚀 Server running on port 5000
```

**Browser (http://localhost:5000/api/health):**
```json
{"status":"OK","message":"Job Portal API is running"}
```

**Frontend (http://localhost:3000/jobs):**
- Shows job cards
- No error messages

