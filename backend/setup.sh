#!/bin/bash

# Aura Divine Backend - Quick Setup Script

echo "✦ Aura Divine Backend Setup ✦"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Download from: https://nodejs.org"
    exit 1
fi

echo "✓ Node.js found: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✓ Dependencies installed successfully!"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚙️  Creating .env file from template..."
    cp .env.example .env
    echo "✓ .env file created"
    echo ""
    echo "⚠️  IMPORTANT: Edit .env file with your Razorpay credentials"
    echo "   1. Get your Razorpay Key ID from: https://dashboard.razorpay.com/app/settings/api-keys"
    echo "   2. Add your email credentials for confirmation emails"
    echo ""
else
    echo "✓ .env file already exists"
    echo ""
fi

echo "================================"
echo "🚀 Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env with your Razorpay and email credentials"
echo "2. Run: npm run dev (for development)"
echo "3. Run: npm start (for production)"
echo ""
echo "Server will run on: http://localhost:5000"
echo "API docs: Check README.md for endpoint documentation"
echo ""
