const runQuery = require('../configurations/db')
const userQueries = require('./queries/userQueries')

const userRepository = {
    getAllUsers: async () => {
        try {
            let data = await runQuery(userQueries.SELECT_ALL_USERS)
            return data.rows;
        } catch (error) {
            throw error;
        }
    },
    getAllUsersNotInChat: async (chatId) => {
        try {
            let data = await runQuery(userQueries.SELECT_ALL_USERS_NOT_IN_CHT, [chatId])
            return data.rows;
        } catch (error) {
            throw error;
        }
    },
    getUser: async (id) => {
        try {
            let data = await runQuery(userQueries.SELECT_USER_BY_ID, [id])
            return data.rows[0];
        } catch (error) {
            throw error;
        }
    },
    deleteUser: async (id) => {
        try {
            await runQuery(userQueries.DELETE_USER, [id])
            return true
        } catch (error) {
            throw error;
        }
    },
    getUserByUsername: async (username) => {
        try {
            let data = await runQuery(userQueries.SELECT_USER_BY_USERNAME, [username])
            return data.rows[0];
        } catch (error) {
            throw error;
        }
    },
    getUserByUsernameAndPassword: async (username, password) => {
        try {
            let data = await runQuery(userQueries.SELECT_USER_BY_USERNAME_AND_PASSWORD, [username, password])
            return data.rows[0];
        } catch (error) {
            throw error;
        }
    },
    createUser: async (username, password) => {
        try {
            let data = await runQuery(userQueries.CREATE_USER, [username, password])
            return data.rows[0];
        } catch (error) {
            throw error;
        }
    },
    updateUser: async (username, password) => {
        try {
            let data = await runQuery(userQueries.UPDATE_USER, [username, password])
            return data.rows[0];
        } catch (error) {
            throw error;
        }
    },
}

module.exports = userRepository;