const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// configure connection to database
const dbPath = path.resolve(__dirname, "../database/books.db");
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error("Error al conectar con la base de datos", err.message);
    } else {
        console.log("Conectado a la base de datos SQLite.");
    }
});
// Crear tabla de usuarios si no existe
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )`);
});

module.exports = db;