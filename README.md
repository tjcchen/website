## Website
A personal intro website made by Andy with heart.

## Transfer Domain to AWS Route 53
Step1: Route 53 Dashboard -> Registered domains -> Transfer in( Single Domain ) -> Check domain transferability

Step2: Retrieve the transfer out `authorization code` from other domain service provider, and then fill out Route 53 domain transfer form.

Step3: Pay AWS Route 53 fee and wait for the domain to transfer in.

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



```

## Links
AWS Route 53: https://us-east-1.console.aws.amazon.com/route53/v2/home#Dashboard

## License
This project is licensed under the terms of the MIT License.