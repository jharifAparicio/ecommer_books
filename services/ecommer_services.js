const EcommerRepository = require('../repositories/ecommer_repository');
const Categoria = require('../models/categoria');

class EcommerServices {
  async getAllCategorias() {
    return await EcommerRepository.getAllCategorias();
  }

  async getCategoriaById(id) {
    return await EcommerRepository.getCategoriaById(id);
  }

  async createCategoria(categoriaData) {
    const categoria = new Categoria(null, categoriaData.nombre, categoriaData.descripcion, null);
    return await EcommerRepository.createCategoria(categoria);
  }

  async updateCategoria(id, categoriaData) {
    const categoria = new Categoria(id, categoriaData.nombre, categoriaData.descripcion, null);
    return await EcommerRepository.updateCategoria(id, categoria);
  }

  async deleteCategoria(id) {
    return await EcommerRepository.deleteCategoria(id);
  }
}

module.exports = new EcommerServices();