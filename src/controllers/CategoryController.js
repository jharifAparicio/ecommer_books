const CategoryService = require('../services/CategoryService');

class CategoryController {
    // Create a new category
    static async create(req, res) {
        const { name } = req.body;
        try {
            const category = await CategoryService.createCategory(name);
            res.status(201).json(category);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Read all categories
    static async getAllCategories(req, res) {
        try {
            const categories = await CategoryService.getAllCategories();
            res.json(categories);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Get category by ID
    static async getCategoryById(req, res) {
        const { id } = req.params;
        try {
            const category = await CategoryService.getCategoryById(id);
            if (!category) {
                return res.status(404).json({ error: 'Categoría no encontrada' });
            }
            res.json(category);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Update category
    static async updateCategory(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        try {
            const category = await CategoryService.updateCategory(id, name);
            res.json(category);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Delete category
    static async deleteCategory(req, res) {
        const { id } = req.params;
        try {
            const category = await CategoryService.deleteCategory(id);
            res.json(category);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = CategoryController;
