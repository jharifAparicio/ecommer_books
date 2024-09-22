const { Router } = require('express');
const router = Router();
const BookController = require('../controllers/BookController');

router.post('/', BookController.create);
router.get('/:title', BookController.getByTitle);
router.get('/', BookController.getAllBooks);
router.put('/:title', BookController.updateStock);
router.delete('/:title', BookController.deleteBook);

module.exports = router;