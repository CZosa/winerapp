const { Pool } = require('pg');
const keys = require('../config/keys');

const db = new Pool({
  user: keys.DB_USER,
  password: keys.DB_PW,
  host: 'database-winer.c37dlit9rxqt.us-west-1.rds.amazonaws.com',
  port: 5432,
  database: keys.DB_NAME,
});

module.exports = db;
