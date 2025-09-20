# PowerShell script to update dependencies
Write-Host "🚀 Updating dependencies for Psychic Affiliate Website..." -ForegroundColor Green

# Check if Node.js is installed
try {
    $nodeVersion = node -v
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js 18+ first." -ForegroundColor Red
    exit 1
}

# Check if npm is installed
try {
    $npmVersion = npm -v
    Write-Host "✅ npm version: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not installed. Please install npm first." -ForegroundColor Red
    exit 1
}

# Backup current package-lock.json if it exists
if (Test-Path "package-lock.json") {
    Write-Host "📦 Backing up package-lock.json..." -ForegroundColor Yellow
    Copy-Item "package-lock.json" "package-lock.json.backup"
}

# Remove node_modules and package-lock.json for clean install
Write-Host "🧹 Cleaning existing installation..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
}
if (Test-Path "package-lock.json") {
    Remove-Item "package-lock.json"
}

# Install dependencies
Write-Host "📥 Installing updated dependencies..." -ForegroundColor Yellow
npm install

# Check for any installation errors
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Installation failed. Please check the error messages above." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Dependencies installed successfully!" -ForegroundColor Green

# Run type checking
Write-Host "🔍 Running type check..." -ForegroundColor Yellow
npm run type-check

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Type check found some issues. Please review and fix them." -ForegroundColor Yellow
} else {
    Write-Host "✅ Type check passed!" -ForegroundColor Green
}

# Test build
Write-Host "🏗️  Testing build..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed. Please check the error messages above." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green

# Initialize database if needed
Write-Host "🗄️  Setting up database..." -ForegroundColor Yellow
npm run setup-complete

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Database setup failed. Please check your database connection." -ForegroundColor Yellow
} else {
    Write-Host "✅ Database setup complete!" -ForegroundColor Green
}

Write-Host ""
Write-Host "🎉 Update complete! Your project is ready to go." -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Run 'npm run dev' to start the development server" -ForegroundColor White
Write-Host "2. Visit /admin to test the A/B testing dashboard" -ForegroundColor White
Write-Host "3. Visit /admin/links to test the link management" -ForegroundColor White
Write-Host "4. Check all your pages to ensure everything works correctly" -ForegroundColor White
Write-Host ""
Write-Host "If you encounter any issues, check the UPDATE_GUIDE.md file for troubleshooting tips." -ForegroundColor Yellow






