const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'database.sqlite3');
const db = new sqlite3.Database(dbPath);

// Crear la tabla 'usuario' si no existe
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS usuario (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      correo TEXT UNIQUE NOT NULL,
      contraseña TEXT NOT NULL,
      fecha_creacion DATE DEFAULT (datetime('now'))
    )
  `);

  // Insertar usuarios de ejemplo
  const insert = db.prepare(`
    INSERT INTO usuario (nombre, correo, contraseña)
    VALUES (?, ?, ?)
  `);

  insert.run('Juan Pérez', 'juan.perez@example.com', 'password123');
  insert.run('Ana Martínez', 'ana.martinez@example.com', 'password456');
  insert.run('Luis Gómez', 'luis.gomez@example.com', 'password789');

  insert.finalize();

  console.log('Base de datos inicializada con usuarios de ejemplo.');

  db.close();
});
