#!/bin/bash

set -e

cd /home/ubuntu/current

echo "Dependency installation start"
npm install
echo "Dependency installation finish"

echo "Build a production bundle"
npm run build
echo "Production bundle build finish"

echo "Starting/reloading the server with PM2..."
# Check if the PM2 instance already exists
if pm2 list | grep -q "https-server"; then
  # If it exists, reload it without downtime
  echo "Reloading existing PM2 instance..."
  pm2 reload https-server
else
  # If it doesn't exist, start a new instance
  echo "Starting new PM2 instance..."
  pm2 --name https-server start npm -- start
fi

echo "The server has been started/reloaded with PM2."

# Save PM2 process list to resurrect processes after reboot
pm2 save

echo "Done! Your application is running with PM2 as 'https-server'"
