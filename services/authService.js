const userRepository = require('../model/userRepository');
const bcrypt = require('bcrypt');

const authService = {
    register: async (username, password) => {
        password = bcrypt.hashSync(password, 10);
        return await userRepository.createUser(username, password);
    },
    authenticate: async (username, password) => {
    },
    logout: async () => {
    }
};

module.exports = authService;