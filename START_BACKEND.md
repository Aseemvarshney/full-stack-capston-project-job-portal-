# How to Start Backend Server

## 🚀 Quick Start

### Step 1: Open Terminal/PowerShell

### Step 2: Navigate to Backend Folder
```powershell
cd "c:\projects\capston project\backend"
```

### Step 3: Start the Server
```powershell
npm run dev
```

### Step 4: You Should See:
```
✅ MongoDB Connected Successfully
🚀 Server running on port 5000
🌐 API URL: http://localhost:5000
📡 Health Check: http://localhost:5000/api/health
```

## ✅ Verify It's Working

1. **Open in Browser:**
   - Go to: http://localhost:5000/api/health
   - Should see: `{"status":"OK","message":"Job Portal API is running"}`

2. **Test Jobs Endpoint:**
   - Go to: http://localhost:5000/api/jobs
   - Should see JSON array with jobs

## 🐛 Troubleshooting

### Problem: "Port 5000 already in use"

**Solution:**
```powershell
# Find what's using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID with the number you see)
taskkill /PID <PID_NUMBER> /F
```

### Problem: "Cannot find module"

**Solution:**
```powershell
cd backend
npm install
npm run dev
```

### Problem: "MongoDB connection error"

**Solution:**
- Make sure MongoDB is running
- Or use MongoDB Atlas (cloud) - update .env file with connection string

## 📝 Keep This Terminal Open!

**IMPORTANT:** Keep the backend terminal running. Don't close it!
- The backend must stay running for the frontend to work
- You'll see requests logged in this terminal

## 🎯 Next Steps

Once backend is running:
1. Open a NEW terminal for frontend
2. Go to frontend folder
3. Run: `npm start`
4. Open: http://localhost:3000

