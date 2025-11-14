// Quick diagnostic script to check project setup
const fs = require('fs');
const path = require('path');

console.log('🔍 Checking Project Setup...\n');

// Check backend
console.log('📦 Backend Check:');
const backendPath = path.join(__dirname, 'backend');
const backendPackageJson = path.join(backendPath, 'package.json');
const backendEnv = path.join(backendPath, '.env');
const backendNodeModules = path.join(backendPath, 'node_modules');

if (fs.existsSync(backendPackageJson)) {
  console.log('  ✅ package.json exists');
} else {
  console.log('  ❌ package.json missing');
}

if (fs.existsSync(backendNodeModules)) {
  console.log('  ✅ node_modules exists');
} else {
  console.log('  ❌ node_modules missing - Run: cd backend && npm install');
}

if (fs.existsSync(backendEnv)) {
  console.log('  ✅ .env file exists');
} else {
  console.log('  ⚠️  .env file missing - Creating one...');
  const envContent = `PORT=5000
MONGODB_URI=mongodb://localhost:27017/jobportal
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
`;
  fs.writeFileSync(backendEnv, envContent);
  console.log('  ✅ .env file created');
}

// Check frontend
console.log('\n📦 Frontend Check:');
const frontendPath = path.join(__dirname, 'frontend');
const frontendPackageJson = path.join(frontendPath, 'package.json');
const frontendNodeModules = path.join(frontendPath, 'node_modules');

if (fs.existsSync(frontendPackageJson)) {
  console.log('  ✅ package.json exists');
} else {
  console.log('  ❌ package.json missing');
}

if (fs.existsSync(frontendNodeModules)) {
  console.log('  ✅ node_modules exists');
} else {
  console.log('  ❌ node_modules missing - Run: cd frontend && npm install');
}

// Check uploads directory
console.log('\n📁 Directories Check:');
const uploadsPath = path.join(backendPath, 'uploads');
const resumesPath = path.join(uploadsPath, 'resumes');

if (fs.existsSync(uploadsPath)) {
  console.log('  ✅ uploads directory exists');
} else {
  console.log('  ⚠️  uploads directory missing - Creating...');
  fs.mkdirSync(uploadsPath, { recursive: true });
  console.log('  ✅ uploads directory created');
}

if (fs.existsSync(resumesPath)) {
  console.log('  ✅ resumes directory exists');
} else {
  console.log('  ⚠️  resumes directory missing - Creating...');
  fs.mkdirSync(resumesPath, { recursive: true });
  console.log('  ✅ resumes directory created');
}

console.log('\n✅ Setup check complete!');
console.log('\n📝 Next steps:');
console.log('  1. Make sure MongoDB is running (or use MongoDB Atlas)');
console.log('  2. Terminal 1: cd backend && npm run dev');
console.log('  3. Terminal 2: cd frontend && npm start');
console.log('  4. Open: http://localhost:3000\n');

