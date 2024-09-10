const bookDB = require('../config/book');
const CategoryModel = require('../models/CategoryModel');

class CategoryRepository {
    static async createCategory(categoryName ) {
        const sql = 'INSERT INTO categories (name) VALUES (?)';
        return new Promise((resolve, reject) => {
            bookDB.run(sql, [categoryName], function(err) {
                if (err) {
                    return reject(err);
                }
                resolve({ id: this.lastID, categoryName });
            });
        });
    }
    static async getCategoryById(categoryId) {
        const sql = 'SELECT * FROM categories WHERE id = ?';
        return new Promise((resolve, reject) => {
            bookDB.get(sql, [categoryId], (err, row) => {
                if (err) {
                    return reject(err);
                }
                if (!row) {
                    return resolve(null);
                }
                const category = new CategoryModel(row.id,row.name);
                resolve(category);
            });
        });
    }

    static async getAllCategories() {
        const sql = 'SELECT * FROM categories';
        return new Promise((resolve, reject) => {
            bookDB.all(sql, (err, rows) => {
                if (err) {
                    return reject(err);
                }
                const categories = rows.map(row => new CategoryModel(row.id, row.name));
                resolve(categories);
            });
        });
    }

    static async updateCategory(categoryId, categoryName) {
        const sql = 'UPDATE categories SET name = ? WHERE id = ?';
        return new Promise((resolve, reject) => {
            bookDB.run(sql, [categoryName, categoryId], function(err) {
                if (err) {
                    return reject(err);
                }
                resolve({ id: categoryId, categoryName });
            });
        });
    }

    static async deleteCategory(categoryId) {
        const sql = 'DELETE FROM categories WHERE id = ?';
        return new Promise((resolve, reject) => {
            bookDB.run(sql, [categoryId], function(err) {
                if (err) {
                    return reject(err);
                }
                resolve({ id: categoryId });
            });
        });
    }
}

module.exports = CategoryRepository;