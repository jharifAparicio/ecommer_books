const pool = require('../database/db');
const Categoria = require('../models/categoria');

class EcommerRepository {
  async getAllCategorias() {
    const [rows] = await pool.query('SELECT * FROM categoria');
    return rows.map(row => new Categoria(row.id, row.nombre, row.descripcion, row.fecha_creacion));
  }

  async getCategoriaById(id) {
    const [rows] = await pool.query('SELECT * FROM categoria WHERE id = ?', [id]);
    if (rows.length) {
      const row = rows[0];
      return new Categoria(row.id, row.nombre, row.descripcion, row.fecha_creacion);
    }
    return null;
  }

  async createCategoria(categoria) {
    const [result] = await pool.query(
      'INSERT INTO categoria (nombre, descripcion) VALUES (?, ?)',
      [categoria.nombre, categoria.descripcion]
    );
    return result.insertId;
  }

  async updateCategoria(id, categoria) {
    const [result] = await pool.query(
      'UPDATE categoria SET nombre = ?, descripcion = ? WHERE id = ?',
      [categoria.nombre, categoria.descripcion, id]
    );
    return result.affectedRows > 0;
  }

  async deleteCategoria(id) {
    const [result] = await pool.query('DELETE FROM categoria WHERE id = ?', [id]);
    return result.affectedRows > 0;
  }
}

module.exports = new EcommerRepository();