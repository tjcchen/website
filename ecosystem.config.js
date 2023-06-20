module.exports = {
  apps: [{
    script: 'npm start'
  }],

  deploy: {
    production: {
      key: "key.pem",
      user: 'ubuntu',
      host: '44.201.246.101',
      ref: 'origin/main',
      repo: 'git@github.com:tjcchen/website.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy': 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};