const runQuery = require('../configurations/db')
const messageQueries = require('./queries/messageQueries')

async function getAllMessages() {
    try {
        let result = await runQuery(messageQueries.SELECT_ALL_MESSAGES)
        return result.rows;
    } catch (error) {
        throw error;
    }
}

module.exports = {getAllMessages};