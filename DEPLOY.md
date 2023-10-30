## Deployment with PM2 and Nginx
```bash
# pm2 init( config ecosystem.config.js )
pm2 ecosystem

# change key.pem permission
chmod 400 key.pem

# login via ssh
ssh -i key.pem ubuntu@44.201.246.101

# install nvm on remote ubuntu machine
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# source bashrc file to make nvm take effect immediately
source .bashrc

# check nvm version, and install lts version of node
nvm --version
nvm install --lts

# install pm2 globally
npm install pm2 -g

# update apt-get & install nginx
sudo apt-get update
sudo apt-get install -y nginx

# restart nginx service, the we should be able to access url: http://44.201.246.101/
sudo service nginx restart

# edit nginx config
sudo vim /etc/nginx/conf.d/myapp.conf

# config should be something like:
server {
  listen 80;
  server_name 44.201.246.101;
  # use this config, after we are adding an IP record on Route 53
  server_name myapp.tjcchen.com;

  location / {
    proxy_pass http://127.0.0.1:3000/;
  }
}

# edit ssh config locally
vim ~/.ssh/config

# config should be something like this:
Host 44.201.246.101
        ForwardAgent yes

# add local key to remote ubuntu machine( locally )
ssh-add

# login to github( remotely on ubuntu )
ssh -T git@github.com

# locally( pull website git repo from github on ubuntu )
pm2 deploy production setup

# remote deployment
pm2 deploy production

# then we can check running application remotely
pm2 list

# pm2 start service
pm2 --name https-server start npm -- start

# to gracefully reload the app without downtime
pm2 reload "your-app-name"

# run the Build in the background
nohup npm run build > build.log 2>&1 &

#################################################
# config https with certbot
#################################################

# The following commands can be found from certbot website:

# Ensure that your version of snapd is up to date
sudo snap install core; sudo snap refresh core

# Remove certbot-auto and any Certbot OS packages if any
sudo apt-get remove certbot

# Install Certbot
sudo snap install --classic certbot

# Ensure that the certbot command can be run
sudo ln -s /snap/bin/certbot /usr/bin/certbot

# Config your nginx server with certbot, this will generate https config to /etc/nginx/conf.d/myapp.conf
sudo certbot --nginx

# renew certbot( single domain )
sudo certbot certonly --force-renew -d www.tjcchen.com
```