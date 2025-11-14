# Testing Jobs Search - Quick Guide

## ✅ Jobs Have Been Added!

12 sample jobs have been successfully added to your database:
- Senior Software Engineer
- Frontend Developer
- Full Stack Developer
- Registered Nurse
- Financial Analyst
- Marketing Manager
- UX/UI Designer
- Sales Representative
- Software Engineering Intern
- Data Scientist
- Customer Service Representative
- Operations Manager

## 🔍 How to Test Job Search

### Step 1: Make Sure Backend is Running
```powershell
cd backend
npm run dev
```
You should see: "Server running on port 5000"

### Step 2: Make Sure Frontend is Running
```powershell
cd frontend
npm start
```
Open: http://localhost:3000

### Step 3: Test the Search

1. **Go to Browse Jobs page**
   - Click "Browse Jobs" in the navbar
   - Or go to: http://localhost:3000/jobs

2. **Try These Searches:**
   - **No filters** - Should show all 12 jobs
   - **Search: "Software"** - Should show Software Engineer, Full Stack Developer, etc.
   - **Category: "Technology"** - Should show tech jobs
   - **Location: "Remote"** - Should show Full Stack Developer
   - **Type: "Full-time"** - Should show full-time jobs

3. **Check Browser Console (F12)**
   - Open Developer Tools (F12)
   - Go to Console tab
   - You should see:
     - "Fetching jobs from: http://localhost:5000/api/jobs?..."
     - "Jobs received: 12" (or number of results)

## 🐛 Troubleshooting

### Problem: No jobs showing

**Check 1: Backend API**
- Open: http://localhost:5000/api/jobs
- Should show JSON array of jobs
- If error, backend is not running

**Check 2: Browser Console**
- Press F12 → Console tab
- Look for errors (red text)
- Check Network tab for failed requests

**Check 3: MongoDB Connection**
- Backend terminal should show: "MongoDB Connected"
- If not, check MongoDB is running

**Check 4: CORS Errors**
- If you see CORS errors, make sure backend is running
- Backend has CORS enabled

### Problem: Jobs not loading after search

1. **Wait for debounce** - Search waits 500ms after you stop typing
2. **Check filters** - Make sure filters match job data
3. **Try clearing filters** - Click "Clear Filters" button
4. **Check console** - Look for error messages

### Problem: "Failed to fetch jobs" error

1. **Backend not running** - Start backend server
2. **Wrong port** - Make sure backend is on port 5000
3. **MongoDB not connected** - Check MongoDB connection

## ✅ Expected Behavior

1. **Initial Load:**
   - Page loads → Shows "Searching jobs..." briefly
   - Then shows all jobs (12 jobs)

2. **After Search:**
   - Type in search box → Wait 500ms
   - Shows "Searching jobs..." briefly
   - Then shows filtered results

3. **Job Cards:**
   - Each job shows: Title, Company, Location, Salary, Skills
   - Click "View Details" to see full job description

## 🎯 Quick Test Commands

```powershell
# Test backend API directly
# Open browser: http://localhost:5000/api/jobs

# Should return JSON with 12 jobs
```

If you still can't see jobs, check:
1. Browser console (F12) for errors
2. Backend terminal for errors
3. Network tab in browser DevTools
4. Make sure you're on http://localhost:3000/jobs (not 5000)

