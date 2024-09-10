const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// configure connection to database
const dbPath = path.resolve(__dirname, '../database/book.sqlite3');
const bookDB = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite de libros.');
    }
});

bookDB.serialize(() => {
    bookDB.run(`
        CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE
        )
    `);

    bookDB.run(`
        CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        autor TEXT NOT NULL,
        isbn TEXT NOT NULL,
        editorial TEXT NOT NULL,
        price REAL NOT NULL,
        stock INTEGER NOT NULL,
        fechaCreacion DATE DEFAULT (datetime('now')),
        link_image TEXT,
        CategoryId INTEGER,
        FOREIGN KEY (CategoryId) REFERENCES categories (id)
    )`);
})

module.exports = bookDB;