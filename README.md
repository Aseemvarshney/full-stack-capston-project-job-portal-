# Job Portal - Full Stack Capstone Project

A comprehensive job portal application built with React (Frontend) and Node.js/Express (Backend) with MongoDB database. This project allows job seekers to browse and apply for jobs, and employers to post jobs and manage applications.

## 🚀 Features

### For Job Seekers:
- Browse and search jobs with filters
- Apply for jobs with resume and cover letter
- Track application status
- Manage profile with skills, experience, and education
- Upload and manage resume

### For Employers:
- Post new job listings
- Manage posted jobs
- View and manage applications
- Update application status (pending, reviewed, shortlisted, rejected, accepted)
- Employer dashboard with analytics

## 🛠️ Tech Stack

### Frontend:
- React 18
- React Router DOM
- Axios
- React Icons
- CSS3

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing
- Multer for file uploads
- Express Validator

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

## 🔧 Installation & Setup

### 1. Clone or Navigate to the Project

```bash
cd "c:\projects\capston project"
```

### 2. Install Dependencies

Install all dependencies for both frontend and backend:

```bash
# Install root dependencies (concurrently)
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

Or use the convenience script:

```bash
npm run install-all
```

### 3. Set Up Environment Variables

1. Navigate to the `backend` folder
2. Create a `.env` file (copy from `.env.example` if it exists):

```bash
cd backend
copy .env.example .env
```

3. Edit the `.env` file with your configuration:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/jobportal
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

**Note:** 
- For local MongoDB: Use `mongodb://localhost:27017/jobportal`
- For MongoDB Atlas: Use your connection string from Atlas dashboard
- Change `JWT_SECRET` to a strong random string for production

### 4. Start MongoDB

**Option A: Local MongoDB**
```bash
# Windows (if MongoDB is installed as a service, it should start automatically)
# Or start manually:
mongod
```

**Option B: MongoDB Atlas (Cloud)**
- Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster and get your connection string
- Update `MONGODB_URI` in `.env` file

### 5. Run the Application

**Option 1: Run Both Frontend and Backend Together (Recommended)**

From the root directory:

```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- Frontend development server on `http://localhost:3000`

**Option 2: Run Separately**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm start
```

## 📱 Usage

### Access the Application

1. Open your browser and navigate to: `http://localhost:3000`

### Create Accounts

**Job Seeker Account:**
1. Click "Register"
2. Select "Job Seeker" role
3. Fill in your details
4. Click "Register"

**Employer Account:**
1. Click "Register"
2. Select "Employer" role
3. Fill in your details including Company Name
4. Click "Register"

### For Job Seekers:

1. **Browse Jobs**: Navigate to "Browse Jobs" to see all available positions
2. **Search & Filter**: Use search bar and filters to find relevant jobs
3. **Apply**: Click on a job to view details and apply
4. **Track Applications**: Go to "My Applications" to see status of your applications
5. **Update Profile**: Go to "Profile" to add skills, experience, and education

### For Employers:

1. **Post Job**: Click "Post Job" to create a new job listing
2. **View Dashboard**: Go to "Employer Dashboard" to see all your posted jobs
3. **Manage Applications**: Click on a job to see and manage applications
4. **Update Status**: Change application status (pending → reviewed → shortlisted/rejected/accepted)

## 📁 Project Structure

```
capston project/
├── backend/
│   ├── models/          # MongoDB models (User, Job, Application)
│   ├── routes/          # API routes (auth, jobs, applications, users)
│   ├── middleware/      # Authentication middleware
│   ├── uploads/         # Uploaded files (resumes)
│   ├── server.js        # Express server entry point
│   └── package.json
├── frontend/
│   ├── public/          # Public assets
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── context/     # React Context (Auth)
│   │   ├── App.js       # Main App component
│   │   └── index.js     # Entry point
│   └── package.json
├── package.json         # Root package.json
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Jobs
- `GET /api/jobs` - Get all jobs (with filters)
- `GET /api/jobs/:id` - Get single job
- `POST /api/jobs` - Create job (Employer only)
- `PUT /api/jobs/:id` - Update job (Employer only)
- `DELETE /api/jobs/:id` - Delete job (Employer only)
- `GET /api/jobs/employer/my-jobs` - Get employer's jobs

### Applications
- `POST /api/applications` - Apply for job (Job Seeker only)
- `GET /api/applications/my-applications` - Get user's applications
- `GET /api/applications/job/:jobId` - Get applications for a job (Employer only)
- `PUT /api/applications/:id/status` - Update application status (Employer only)
- `DELETE /api/applications/:id` - Delete application

### Users
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `POST /api/users/upload-resume` - Upload resume (Job Seeker only)

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running (local) or connection string is correct (Atlas)
- Check firewall settings if using cloud MongoDB

### Port Already in Use
- Change `PORT` in backend `.env` file
- Or kill the process using the port:
  ```bash
  # Windows
  netstat -ano | findstr :5000
  taskkill /PID <PID> /F
  ```

### Module Not Found Errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

### CORS Errors
- Ensure backend is running on port 5000
- Check that frontend API calls use correct URL

## 📝 Notes for College Submission

1. **Documentation**: This README provides comprehensive setup instructions
2. **Code Quality**: Clean, organized code with proper structure
3. **Features**: Full CRUD operations, authentication, file uploads
4. **Database**: MongoDB with proper schema design
5. **Security**: Password hashing, JWT authentication, input validation

## 🚀 Deployment (Optional)

### Backend Deployment (Heroku/Railway/Render)
1. Set environment variables in hosting platform
2. Update CORS settings for production domain
3. Deploy backend code

### Frontend Deployment (Netlify/Vercel)
1. Build frontend: `cd frontend && npm run build`
2. Update API URLs in frontend code to production backend URL
3. Deploy `build` folder

## 📄 License

This project is created for educational purposes as a capstone project.

## 👨‍💻 Author

Created as a Full Stack Capstone Project

---

**Good luck with your college submission! 🎓**

