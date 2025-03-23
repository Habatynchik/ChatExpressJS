const messageQueries = {
    SELECT_ALL_MESSAGES : 'SELECT m.id, message, user_id, username FROM messages m JOIN users u ON m.user_id = u.id;',
    INSERT_MESSAGE : 'INSERT INTO messages (message, user_id) VALUES ($1, $2);',
    DELETE_MESSAGE : 'DELETE FROM messages WHERE id = $1;',
    UPDATE_MESSAGE : 'UPDATE messages SET message = $1 WHERE id = $2;',
};

module.exports = messageQueries;