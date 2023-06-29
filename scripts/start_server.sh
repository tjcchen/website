#!/bin/sh

cd /home/ubuntu/current
npm install

if [ $DEV ]; then
  npm run dev;
  else
  npm run build;
  npm start;
fi