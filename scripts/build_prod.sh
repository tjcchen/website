#!/bin/bash

set -e

cd /home/ubuntu/current

echo "Dependency installation start"
npm install
echo "Dependency installation finish"

echo "Build a production bundle"
npm run build
echo "Production bundle build finish"

echo "Start the server..."
npm run start
echo "The server has been started."
