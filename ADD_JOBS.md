# How to Add Sample Jobs

## Quick Steps

1. **Make sure your backend is running:**
   ```powershell
   cd backend
   npm run dev
   ```

2. **In a NEW terminal, run the seed script:**
   ```powershell
   cd backend
   npm run seed
   ```

3. **You should see:**
   ```
   ✅ Successfully added 12 sample jobs!
   ```

4. **Now go to your frontend and search for jobs!**

## What Jobs Are Added?

The seed script adds 12 sample jobs across different categories:
- Technology (Software Engineer, Frontend Developer, Full Stack, etc.)
- Healthcare (Registered Nurse)
- Finance (Financial Analyst)
- Marketing (Marketing Manager)
- Design (UX/UI Designer)
- Sales (Sales Representative)
- Customer Service (Customer Service Rep)
- Operations (Operations Manager)
- And more!

## Notes

- The script creates a test employer account if it doesn't exist
- All jobs are posted by this test employer
- You can run the seed script multiple times (it will add duplicate jobs)
- To clear and re-seed, uncomment the delete line in `seedJobs.js`

