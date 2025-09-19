#!/bin/bash

echo "🚀 Updating dependencies for Psychic Affiliate Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm version: $(npm -v)"

# Backup current package-lock.json if it exists
if [ -f "package-lock.json" ]; then
    echo "📦 Backing up package-lock.json..."
    cp package-lock.json package-lock.json.backup
fi

# Remove node_modules and package-lock.json for clean install
echo "🧹 Cleaning existing installation..."
rm -rf node_modules
rm -f package-lock.json

# Install dependencies
echo "📥 Installing updated dependencies..."
npm install

# Check for any installation errors
if [ $? -ne 0 ]; then
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi

echo "✅ Dependencies installed successfully!"

# Run type checking
echo "🔍 Running type check..."
npm run type-check

if [ $? -ne 0 ]; then
    echo "⚠️  Type check found some issues. Please review and fix them."
else
    echo "✅ Type check passed!"
fi

# Test build
echo "🏗️  Testing build..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi

echo "✅ Build successful!"

# Initialize database if needed
echo "🗄️  Setting up database..."
npm run setup-complete

if [ $? -ne 0 ]; then
    echo "⚠️  Database setup failed. Please check your database connection."
else
    echo "✅ Database setup complete!"
fi

echo ""
echo "🎉 Update complete! Your project is ready to go."
echo ""
echo "Next steps:"
echo "1. Run 'npm run dev' to start the development server"
echo "2. Visit /admin to test the A/B testing dashboard"
echo "3. Visit /admin/links to test the link management"
echo "4. Check all your pages to ensure everything works correctly"
echo ""
echo "If you encounter any issues, check the UPDATE_GUIDE.md file for troubleshooting tips."




