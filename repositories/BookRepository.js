const db = require('../config/database');
const Book = require('../models/Book');

class BookRepository {
    static getAllBooks(callback) {
        const sql = 'SELECT * FROM books';
        db.all(sql, [], (err, rows) => {
        if (err) {
            return callback(err);
        }
        const books = rows.map(row => new Book(row.id, row.title, row.author, row.price));
        callback(null, books);
        });
    }
}

module.exports = BookRepository;
