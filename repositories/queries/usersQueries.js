const usersQueries = {
    getUserById: 'SELECT * FROM users WHERE id = $1;',
    getUserByUsername: 'SELECT * FROM users WHERE username = $1;',
    getAllUsers: 'SELECT * FROM users;',
    createUser: `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *;`,
    updateUser: 'UPDATE users SET username = $1, password = $2 WHERE id = $3;',
    deleteUser: 'DELETE FROM users WHERE id = $1;',
};

module.exports = usersQueries;