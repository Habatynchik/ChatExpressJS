const messagesQueries = {
    getMessageById: 'SELECT * FROM messages WHERE id = $1',
    getAllMessages: 'SELECT m.id, message, user_id, username FROM messages m JOIN users u ON m.user_id = u.id'
};

module.exports = messagesQueries;