const env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  require('dotenv').config();  
}
const axios = require('axios');
const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/getmusiclive';

const client = new pg.Client(connectionString);
client.connect();

module.exports =
