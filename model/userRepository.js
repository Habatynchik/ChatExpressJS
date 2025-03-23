const runQuery = require('../configurations/db')
const userQueries = require('./queries/userQueries')

const userRepository = {
    getAllUsers: () => {},
    getUserById: (id) => {},
    getUserByUsername: (username) => {},
    getUserByUsernameAndPassword: async (username, password) => {
        try {
            let data = await runQuery(userQueries.getUserByUsernameAndPassword, [username, password])
            return data.rows[0];
        } catch (error) {
            throw error;
        }
    },
    createUser: async (username, password) => {
        try {
            let data = await runQuery(userQueries.createUser, [username, password])
            return data.rows[0];
        } catch (error) {
            throw error;
        }
    },
}

module.exports = userRepository;