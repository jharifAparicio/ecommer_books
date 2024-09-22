const BookRepository = require('../repositories/BookRepository');

class  BookServices{
    static async createBook(title,author,isbn,editorial,price,stock,dateCreation,link_imagen,CategoryId){
        const book = {title,author,isbn,editorial,price,stock,dateCreation,link_imagen,CategoryId};
        return BookRepository.createBook(book);
    }
    static async getBookByTitle(title){
        return BookRepository.getBookByTitle(title);
    }
    static async getAllBooks(){
        return BookRepository.getAllBooks();
    }
    static async updateBookStock(title,stock){
        return BookRepository.updateBookStock(title,stock);
    }
    static async deleteBook(title){
        return BookRepository.deleteBook(title);
    }
}

module.exports = BookServices;