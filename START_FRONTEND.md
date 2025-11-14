# How to Start Frontend - PowerShell Commands

## ✅ Correct PowerShell Commands

### Step 1: Navigate to Frontend Folder
```powershell
cd "c:\projects\capston project\frontend"
```

### Step 2: Start Frontend
```powershell
npm start
```

**NOT** `npn start` (that's a typo - missing 'm')

## 📝 Important Notes for PowerShell

### PowerShell doesn't use `&&`
- ❌ Wrong: `cd frontend && npm start`
- ✅ Correct: Run commands separately:
  ```powershell
  cd frontend
  npm start
  ```

### Or use semicolon `;`
- ✅ Also works: `cd frontend; npm start`

## 🎯 Complete Steps

**Terminal 1 - Backend (Already Running):**
```powershell
cd "c:\projects\capston project\backend"
npm start
```
✅ You already have this running!

**Terminal 2 - Frontend (NEW Terminal):**
```powershell
cd "c:\projects\capston project\frontend"
npm start
```

## ✅ What You Should See

After running `npm start` in frontend folder:

```
Compiled successfully!

You can now view job-portal-frontend in the browser.

  Local:            http://localhost:3000
```

## 🐛 Common Mistakes

1. **Typo: `npn` instead of `npm`**
   - ❌ `npn start`
   - ✅ `npm start`

2. **Using `&&` in PowerShell**
   - ❌ `cd frontend && npm start`
   - ✅ `cd frontend` then `npm start`

3. **Wrong folder**
   - Make sure you're in `frontend` folder, not `backend`

## 🎯 Quick Test

1. Open NEW terminal
2. Type: `cd "c:\projects\capston project\frontend"`
3. Type: `npm start`
4. Wait for "Compiled successfully!"
5. Open: http://localhost:3000

