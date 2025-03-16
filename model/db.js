const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'chat',
    port: 5432,
    max: 10,
});

module.exports = pool;