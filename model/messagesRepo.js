const pool = require('./db')

const SELECT_ALL_MESSAGES = `
    select m.id, message, user_id, username
    from messages m
             join users u on m.user_id = u.id;
`

function getAllMessages() {
    return runQuery(SELECT_ALL_MESSAGES)
        .then((results) => results.rows);
}

async function runQuery(query) {
    const client = await pool.connect();
    try {
        return await client.query(query);
    } catch (e) {
        console.error(e);
    } finally {
        client.release();
    }
}

module.exports = {getAllMessages};