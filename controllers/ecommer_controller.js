const EcommerServices = require('../services/ecommer_services');

class EcommerController {
  async getAllCategorias(req, res) {
    try {
      const categorias = await EcommerServices.getAllCategorias();
      res.json(categorias);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getCategoriaById(req, res) {
    try {
      const categoria = await EcommerServices.getCategoriaById(req.params.id);
      if (categoria) {
        res.json(categoria);
      } else {
        res.status(404).json({ message: 'Categoría no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createCategoria(req, res) {
    try {
      const id = await EcommerServices.createCategoria(req.body);
      res.status(201).json({ id, message: 'Categoría creada exitosamente' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateCategoria(req, res) {
    try {
      const success = await EcommerServices.updateCategoria(req.params.id, req.body);
      if (success) {
        res.json({ message: 'Categoría actualizada exitosamente' });
      } else {
        res.status(404).json({ message: 'Categoría no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteCategoria(req, res) {
    try {
      const success = await EcommerServices.deleteCategoria(req.params.id);
      if (success) {
        res.json({ message: 'Categoría eliminada exitosamente' });
      } else {
        res.status(404).json({ message: 'Categoría no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new EcommerController();