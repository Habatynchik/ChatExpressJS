const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'chat',
    port: 5432,
    max: 10,
});

const runQuery = async (query, params = []) => {
    const client = await pool.connect();
    try {
        return await client.query(query, params);
    } catch (e) {
        throw e;
    } finally {
        client.release();
    }
}

module.exports = runQuery;