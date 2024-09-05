const express = require('express');
const BookController = require('../controllers/BookController');
const router = express.Router();

router.get('/books', BookController.getAllBooks);

module.exports = router;
