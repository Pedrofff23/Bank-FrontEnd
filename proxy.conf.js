const PROXY_CONFIG =[
  {
    context: ['/api'],
    target: 'http://backend:8080/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG
