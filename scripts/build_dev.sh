#!/bin/bash

set -e

npm install

if [ $DEV ]
then
  npm run dev;
else
  npm run build;
  npm start;
fi