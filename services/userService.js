const userRepository = require("../repositories/userRepository");

const userService = {
    getUserByUsername: async (username) => {
        return await userRepository.getUserByUsername(username);
    },
    getUserById: async (id) => {
        return await userRepository.getUserById(id);
    }
};

module.exports = userService;