const runQuery = require('../config/db')
const usersQueries = require('./queries/usersQueries')

const userRepository = {
    createUser: async (username, password) => {
        try {
            const results = await runQuery(usersQueries.createUser, [username, password]);
            return results.rows[0];
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },
    getAllUsers: async () => {
        try {
            const results = await runQuery(usersQueries.getAllUsers);
            return results.rows;
        } catch (error) { 
            console.error('Error getting all users:', error);
            throw error;
        }
    },
    getUserByUsername: async (username) => {
        try {
            const result = await runQuery(usersQueries.getUserByUsername, [username]);
            return result.rows[0];
        } catch (error) {
            console.error('Error getting user by username:', error);
            throw error;
        }
    },
    getUserByUsernameAndPassword: async (username, password) => {
        try {
            const result = await runQuery(usersQueries.getUserByUsernameAndPassword, [username, password]);
            return result.rows[0];
        } catch (error) {
            console.error('Error getting user by username and password:', error);
            throw error;
        }
    },
    getUserById: async (id) => {
        try {
            const result = await runQuery(usersQueries.getUserById, [id]);
            return result.rows[0];
        } catch (error) {
            console.error('Error getting user by ID:', error);
            throw error;
        }
    }
}

module.exports = userRepository;