
const PROXY_CONFIG =[
  {
    context: ['/api'],
    target: 'http://34.74.38.83:8080/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG
