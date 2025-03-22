const runQuery = require('../configurations/db')

const SELECT_ALL_MESSAGES = 'SELECT m.id, message, user_id, username FROM messages m JOIN users u ON m.user_id = u.id;'

async function getAllMessages() {
    try {
        let result = await runQuery(SELECT_ALL_MESSAGES)
        return result.rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {getAllMessages};