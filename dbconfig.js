const  config = {
    server:  '192.168.18.12', // if it does not work try- localhost
    database:  'Products',
    options: {
      trustedconnection:  true,
      enableArithAbort:  true,
      instancename:  'SQLEXPRESS'  // SQL Server instance name
    },
    port: 1433
  }
  
  module.exports = config;
  