const { DataTypes } = require('sequelize');
const sequelize = require('../config/book');
const Categoria = require('./category');

//define modelo book
const Book = sequelize.define('Book',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isbn:{
        type: DataTypes.STRING,
        allowNull: false
    },
    editorial:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    stock:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fechaCreacion:{
        type: DataTypes.DATE,
        allowNull: true
    },
    link_image:{
        type: DataTypes.STRING,
        allowNull: true
    },
    CategoryId:{
        type: DataTypes.INTEGER,
        references:{
            model: Categoria,
            key: 'id'
        }
    }
});

Book.belongsTo(Category);

module.exports = Book;