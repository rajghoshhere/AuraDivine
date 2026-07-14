@echo off
REM Aura Divine Backend - Quick Setup Script for Windows

echo.
echo ==========================================
echo  ✦ Aura Divine Backend Setup ✦
echo ==========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    echo    Download from: https://nodejs.org
    pause
    exit /b 1
)

for /f "tokens=*" %%A in ('node --version') do set node_version=%%A
echo ✓ Node.js found: %node_version%
echo.

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

if errorlevel 1 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ✓ Dependencies installed successfully!
echo.

REM Check if .env exists
if not exist .env (
    echo ⚙️  Creating .env file from template...
    copy .env.example .env
    echo ✓ .env file created
    echo.
    echo ⚠️  IMPORTANT: Edit .env file with your Razorpay credentials
    echo    1. Get your Razorpay Key ID from: https://dashboard.razorpay.com/app/settings/api-keys
    echo    2. Add your email credentials for confirmation emails
    echo.
) else (
    echo ✓ .env file already exists
    echo.
)

echo ==========================================
echo 🚀 Setup Complete!
echo ==========================================
echo.
echo Next steps:
echo 1. Edit backend\.env with your Razorpay and email credentials
echo 2. Run: npm run dev (for development with auto-reload)
echo 3. Run: npm start (for production)
echo.
echo Server will run on: http://localhost:5000
echo API docs: Check README.md for endpoint documentation
echo.
pause
