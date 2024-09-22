const BookDB = require('../config/book');
const BookModel = require('../models/BookModel');

class BookRepository {
    static async createBook(book) {
        const { title, author, isbn, editorial, price, stock, dateCreation, link_imagen, CategoryId } = book;
        const sql = 'INSERT INTO books (title,author,isbn,editorial,price,stock,dateCreation,link_image,CategoryId) VALUES (?,?,?,?,?,?,?,?,?)';
        return new Promise((resolve, reject) => {
            BookDB.run(sql, [title,author,isbn,editorial,price,stock,dateCreation,link_imagen,CategoryId], function(err) {
                if (err) {
                    return reject(err);
                }
                resolve({id: this.lastID, ...book});
            });
        });
    }
    
    static async getBookByTitle(title) {
        const sql = 'SELECT * FROM books WHERE title = ?';
        return new Promise((resolve, reject) => {
            BookDB.get(sql, [title], (err, row) => {
                if (err) {
                    return reject(err);
                }
                if (!row) {
                    return resolve(null);
                }
                const book = new BookModel(row.id,row.title,row.author,row.isbn,row.editorial,row.price,row.stock,row.dateCreation,row.link_image,row.CategoryId);
                resolve(book);
            });
        });
    }

    static async getAllBooks() {
        const sql = 'SELECT * FROM books';
        return new Promise((resolve, reject) => {
            BookDB.all(sql, (err, rows) => {
                if (err) {
                    return reject(err);
                }
                const books = rows.map(row => new BookModel(row.id,row.title,row.author,row.isbn,row.editorial,row.price,row.stock,row.dateCreation,row.link_image,row.CategoryId));
                resolve(books);
            });
        });
    }

    static async updateBookStock(title, stock) {
        const sql = 'UPDATE books SET stock = ? WHERE title = ?';
        return new Promise((resolve, reject) => {
            BookDB.run(sql, [stock, title], function(err) {
                if (err) {
                    return reject(err);
                }
                if (this.changes === 0) {
                    return reject({message: 'Libro no encontrado', status: 404});
                }
                resolve({message: `Stock actualizado ${title}`});
            });
        });
    }

    static async deleteBook(title) {
        const sql = 'DELETE FROM books WHERE title = ?';
        return new Promise((resolve, reject) => {
            BookDB.run(sql, [title], function(err) {
                if (err) {
                    return reject(err);
                }
                if (this.changes === 0) {
                    return reject({message: 'Libro no encontrado', status: 404});
                }
                resolve({message: `Libro eliminado ${title}`});
            });
        });
    }
}

module.exports = BookRepository;