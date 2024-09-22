const BookServices = require('../services/BookServices');

class BookController {
    static async create(req, res) {
        const { title, author, isbn, editorial, price, stock, dateCreation, link_imagen, CategoryId } = req.body;
        try {
            const result = await BookServices.createBook(title, author, isbn, editorial, price, stock, dateCreation, link_imagen, CategoryId);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getByTitle(req, res) {
        const { title } = req.params;

        try {
            const book = await BookServices.getBookByTitle(title);
            if (!book) {
                return res.status(404).json({ error: 'Libro no encontrado' });
            }
            res.json(book);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getAllBooks(req, res) {
        try {
            const books = await BookServices.getAllBooks();
            res.json(books);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateStock(req, res) {
        const { title } = req.params;
        const { newStock } = req.body;

        if (!newStock) {
            return res.status(400).json({ error: 'El nuevo stock es requerido' });
        }

        try {
            const result = await BookServices.updateBookStock(title, newStock);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteBook(req, res) {
        const { title } = req.params;

        try {
            const result = await BookServices.deleteBook(title);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
module.exports = BookController;