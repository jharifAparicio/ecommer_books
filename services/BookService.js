const BookRepository = require('../repositories/BookRepository');

class BookService {
    static getAllBooks(callback) {
        BookRepository.getAllBooks((err, books) => {
        if (err) {
            return callback(err);
        }
        callback(null, books);
        });
    }
}

module.exports = BookService;
