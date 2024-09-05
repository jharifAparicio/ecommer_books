const BookService = require('../services/BookService');

class BookController {
  static getAllBooks(req, res) {
    BookService.getAllBooks((err, books) => {
      if (err) {
        res.status(500).json({ error: 'Error al obtener los libros' });
      } else {
        res.json(books);
      }
    });
  }
}

module.exports = BookController;