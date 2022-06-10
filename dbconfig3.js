//const sql = require('mssql')
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: 'Products',
  server: '192.168.18.12',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}

module.exports = config;