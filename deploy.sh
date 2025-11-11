#!/bin/bash

echo "🚀 Deploying 3rbst MVP to Vercel..."
echo ""

# Check if vercel is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Are you in the 3rbst-mvp directory?"
    exit 1
fi

# Build locally first to catch errors
echo "🏗️  Building locally to check for errors..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

echo ""
echo "✅ Build successful!"
echo ""
echo "📤 Deploying to Vercel..."
echo ""

# Deploy to production
vercel --prod

echo ""
echo "🎉 Deployment complete!"
echo ""
echo "Next steps:"
echo "  1. Test your live site"
echo "  2. Add custom domain (optional): vercel domains add 3rbst.de"
echo "  3. Share with beta users"
echo ""
