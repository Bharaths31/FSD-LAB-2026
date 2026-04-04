# FSD Lab Record - Implementation Plan

## Overview
Create a structured lab record with folders for each exercise, containing working code, documentation (Aim, Procedure, Result), and screenshots.

## Directory Structure
```
Record/
├── Ex1_Basic_JS/
│   ├── 1a_DevSetup/          # Dev environment setup doc
│   ├── 1b_InteractivePage/   # HTML/CSS/JS interactive page
│   ├── 1c_RegistrationForm/  # User registration form
│   └── 1d_InterestForm/      # Interest/selection form
├── Ex2_React_Fundamentals/
│   ├── 2a_AadharCard/        # Aadhaar card viewer (React via CDN)
│   ├── 2b_RegistrationForm/  # React registration form
│   └── 2c_CounterApp/        # React counter app
├── Ex3_Advanced_React/
│   └── 3a_ThemeToggle/       # Light/Dark theme toggle with Context
├── Ex4_Express_Backend/
│   ├── 4a_HealthCheck/       # GET /api/health
│   ├── 4b_ScanManagement/    # CRUD for medical scans
│   ├── 4c_RequestLogger/     # Logging middleware
│   └── 4d_Validation/        # Validation middleware
├── Ex5_MongoDB_JWT/
│   ├── 5a_MongoConnection/   # Mongoose connection setup
│   ├── 5b_ScanSchema/        # Scan document schema
│   ├── 5c_TraineeValidation/ # Trainee schema with validation
│   ├── 5d_CourseFilter/      # Filtered GET route
│   └── 5e_JWT_Auth/          # JWT authentication
└── Ex6_Deployment/
    └── 6a_VercelDeploy/      # Deployment guide
```

## Per-Exercise Deliverables
Each folder will contain:
1. **Working source code** (HTML/CSS/JS or Node.js files)
2. **RECORD.md** with:
   - **Aim** (1-2 lines)
   - **Procedure** (5 numbered steps)
   - **Result** (2 lines)
3. **Screenshots** captured from browser/terminal

## Approach
- **Ex1 (1a-1d)**: Pure HTML/CSS/JS files, served via simple HTTP server, screenshot via browser
- **Ex2 (2a-2c)**: React apps using Vite, screenshot via browser
- **Ex3 (3a)**: React with Context API, screenshot both themes
- **Ex4 (4a-4d)**: Express.js apps, screenshot terminal + Postman-style output
- **Ex5 (5a-5e)**: Express + Mongoose + JWT, screenshot terminal output
- **Ex6**: Documentation-based with deployment screenshots

> [!IMPORTANT]
> The reference images show simple, academic-style UIs (basic forms, clean layouts). Code will be functional and clear, matching the academic lab record style.

## Open Questions

1. **React apps**: Should I use Vite for React exercises (2, 3), or standalone HTML with React CDN links to keep it simpler for a lab record?
2. **MongoDB**: For Ex5, should I use a local MongoDB connection string or a MongoDB Atlas cloud URL?  
3. **Ex6 Deployment**: Do you have a Vercel account set up, or should I just write the deployment guide/steps?
4. **Screenshots**: I'll capture browser screenshots for frontend exercises programmatically. For backend exercises (4, 5), I'll show terminal/curl output screenshots. Is that acceptable?

## Verification Plan
- Each HTML/CSS/JS exercise will be opened in browser and screenshotted
- Each Express app will be started and tested with curl commands
- React apps will be run with `npm run dev` and screenshotted
