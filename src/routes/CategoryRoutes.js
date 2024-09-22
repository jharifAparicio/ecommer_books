const { Router } = require('express');
const router = Router();
const CategoryController = require('../controllers/CategoryController');

router.post('/', CategoryController.create);
router.get('/', CategoryController.getAllCategories);
router.get('/:id', CategoryController.getCategoryById);
router.put('/:id', CategoryController.updateCategory);
router.delete('/:id', CategoryController.deleteCategory);

module.exports = router;