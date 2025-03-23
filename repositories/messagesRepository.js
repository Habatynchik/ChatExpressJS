const runQuery = require('../config/db')
const messagesQueries = require('./queries/messagesQueries')

const messagesRepository = {
    getAllMessages: async () => {
        try {
            const results = runQuery(messagesQueries.getAllMessages);
            return await results.rows;
        } catch (error) {
            console.error('Error getting messages', error);
            throw error;
        }
    }
}

module.exports = messagesRepository;