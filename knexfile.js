const dotenv = require('dotenv');
require('dotenv').config();

console.log(process.env.DATABASE_URL);

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DEVELOPMENT_DATABASE_URL
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
