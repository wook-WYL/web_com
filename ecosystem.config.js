module.exports = {
  apps: [
    {
      name: 'startup-landing-page',
      script: 'npm',
      args: 'start',
      cwd: './',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        PATH: process.env.PATH
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: 'logs/error.log',
      out_file: 'logs/out.log',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
        PATH: process.env.PATH
      }
    }
  ]
}