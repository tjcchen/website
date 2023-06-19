# base image
FROM node:18.16.0-alpine

# set target folder to app, thus we no longer need to rewrite /app folder in COPY instruction
RUN mkdir -p /app
WORKDIR /app

# OPTIMIZE
COPY . .
RUN npm install
RUN npm run build

# add an app group, and add an app user
RUN addgroup app && adduser -S -G app app

# use the app user
USER app

# expose a 3000 application port( just for documentation purpose )
EXPOSE 3000

# start the application
CMD ["npm", "run", "start"]
