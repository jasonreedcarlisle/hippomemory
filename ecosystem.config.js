module.exports = {
  apps: [
    {
      name: 'hippomemory-production',
      script: './index.js',
      cwd: '/home/ubuntu/hippomemory-production',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      error_file: '/home/ubuntu/logs/hippomemory-production-error.log',
      out_file: '/home/ubuntu/logs/hippomemory-production-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M'
    },
    {
      name: 'hippomemory-staging',
      script: './index.js',
      cwd: '/home/ubuntu/hippomemory-staging',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'staging',
        PORT: 3002
      },
      error_file: '/home/ubuntu/logs/hippomemory-staging-error.log',
      out_file: '/home/ubuntu/logs/hippomemory-staging-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M'
    }
  ]
};

