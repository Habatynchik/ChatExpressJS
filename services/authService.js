const userRepository = require("../repositories/userRepository");
const bcrypt = require('bcrypt');

const authService = {
    createUser: async (username, password) => {
        if (!username || !password) {
            throw new Error("Username or password must be non empty");
        }
        let user = await userRepository.getUserByUsername(username);
        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 10);
            return await userRepository.createUser(username, hashedPassword);
        } else {
            throw new Error("Username already taken");
        }
    },
    auth: async (req, username, password) => {
        const user = await userRepository.getUserByUsername(username);
        if (!user) {
            throw new Error("User not found");
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        }
        req.session.user = {id: user.id,username: user.username};

        return {message: "Login successful"};
    },
    logout: (req) => {
        return new Promise((resolve, reject) => {
            req.session.destroy((err) => {
                if (err) {
                    reject(new Error("Logout failed"));
                } else {
                    resolve({message: "Logout successful"});
                }
            });
        });
    }
};

module.exports = authService;