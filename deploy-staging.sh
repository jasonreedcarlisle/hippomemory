#!/bin/bash

# Deployment script for Hippo Daily Staging
# This script pulls the latest code from GitHub and restarts the PM2 process

set -e  # Exit on any error

echo "🚀 Starting staging deployment..."

# Navigate to staging directory
cd /home/ubuntu/hippomemory-staging

# Pull latest code from staging branch
echo "📥 Pulling latest code from GitHub..."
git fetch origin
git reset --hard origin/staging

# Install dependencies (if package.json changes)
if [ -f package.json ]; then
    echo "📦 Installing dependencies..."
    npm install --production
fi

# Restart PM2 process
echo "🔄 Restarting PM2 process..."
pm2 restart hippomemory-staging

# Show status
echo "✅ Deployment complete!"
pm2 status hippomemory-staging

echo ""
echo "📊 View logs with: pm2 logs hippomemory-staging"
echo "📈 Monitor with: pm2 monit"

