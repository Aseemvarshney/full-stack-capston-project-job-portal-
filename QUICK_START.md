# Quick Start Guide

## 🚀 Quick Setup (5 Minutes)

### Step 1: Install Dependencies
```bash
# From project root
npm run install-all
```

### Step 2: Set Up MongoDB

**Option A: Local MongoDB**
- Make sure MongoDB is installed and running
- Default connection: `mongodb://localhost:27017/jobportal`

**Option B: MongoDB Atlas (Cloud - Recommended)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account and cluster
3. Get connection string
4. Update `backend/.env` file with your connection string

### Step 3: Configure Environment
The `.env` file is already created in `backend/` folder. If using MongoDB Atlas, update the `MONGODB_URI`.

### Step 4: Run the Application

**Easy Way (Both at once):**
```bash
npm run dev
```

**Or separately:**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm start
```

### Step 5: Open Browser
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## ✅ Test the Application

1. **Register as Job Seeker:**
   - Click Register → Select "Job Seeker" → Fill form → Register

2. **Register as Employer:**
   - Click Register → Select "Employer" → Fill form (include Company Name) → Register

3. **Post a Job (as Employer):**
   - Login as Employer → Click "Post Job" → Fill form → Submit

4. **Apply for Job (as Job Seeker):**
   - Login as Job Seeker → Browse Jobs → Click on a job → Apply

5. **Manage Applications (as Employer):**
   - Go to Dashboard → Click on a job → View applications → Update status

## 🎯 That's It!

Your Job Portal is ready! Check the full README.md for detailed documentation.

