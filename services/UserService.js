const UserRepository = require('../repositories/UserRepository');

class UserService {
    static async registerUser(user) {
        return new Promise((resolve, reject) => {
            UserRepository.createUser(user, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    }

    static async findUserByUsername(username) {
        return new Promise((resolve, reject) => {
            UserRepository.getUserByUsername(username, (err, user) => {
                if (err) reject(err);
                else resolve(user);
            });
        });
    }
}

module.exports = UserService;
