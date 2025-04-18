const userQueries = {
    SELECT_USER_BY_USERNAME: "SELECT * FROM users WHERE username = $1;",
    SELECT_USER_BY_ID: "SELECT * FROM users WHERE id = $1;",
    SELECT_ALL_USERS: "SELECT * FROM users;",
    SELECT_USER_BY_USERNAME_AND_PASSWORD: "SELECT * FROM users WHERE username = $1 AND password = $2;",
    CREATE_USER: "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *;",
    DELETE_USER: "DELETE FROM users WHERE id = $1;",
    UPDATE_USER: "UPDATE users SET username = $2, password = $3 WHERE id = $1 RETURNING *;",
};

module.exports = userQueries;