const db = require('../config/database');
const User = require('../models/User');

class UserRepository {
    static createUser(user, callback) {
        const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.run(sql, [user.username, user.password], function(err) {
            if (err) {
                return callback(err);
            }
            user.id = this.lastID;
            callback(null, user);
        });
    }

    static getUserByUsername(username, callback) {
        const sql = 'SELECT * FROM users WHERE username = ?';
        db.get(sql, [username], (err, row) => {
            if (err) {
                return callback(err);
            }
            if (!row) {
                return callback(null, null);
            }
            const user = new User(row.id, row.username, row.password);
            callback(null, user);
        });
    }
}

module.exports = UserRepository;

