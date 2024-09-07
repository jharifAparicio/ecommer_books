const express = require('express');
const router = express.Router();
const EcommerController = require('../controllers/ecommer_controller');

router.get('/categorias', EcommerController.getAllCategorias);
router.get('/categorias/:id', EcommerController.getCategoriaById);
router.post('/categorias', EcommerController.createCategoria);
router.put('/categorias/:id', EcommerController.updateCategoria);
router.delete('/categorias/:id', EcommerController.deleteCategoria);

module.exports = router;