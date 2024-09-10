const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryService {
    static async createCategory(categoryName) {
        if (!categoryName) {
            throw new Error('Todos los campos son obligatorios');
        }
        return await CategoryRepository.createCategory(categoryName);
    }

    static async getCategoryById(categoryId) {
        if (!categoryId) {
            throw new Error('El ID de la categoría es obligatorio');
        }
        return await CategoryRepository.getCategoryById(categoryId);
    }
    static async getAllCategories() {
        return await CategoryRepository.getAllCategories();
    }

    static async updateCategory(categoryId, categoryName) {
        if (!categoryName) {
            throw new Error('Todos los campos son obligatorios');
        }
        if (!categoryId) {
            throw new Error('El ID de la categoría es obligatorio');
        }
        return await CategoryRepository.updateCategory(categoryId, categoryName);
    }

    static async deleteCategory(categoryId) {
        if (!categoryId) {
            throw new Error('El ID de la categoría es obligatorio');
        }
        return await CategoryRepository.deleteCategory(categoryId);
    }
}

module.exports = CategoryService;