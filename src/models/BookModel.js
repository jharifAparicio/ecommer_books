class Book {
    constructor(id,title,author,isbn,editorial,price,stock,fechaCreacion,link_image,IdCategory){
        this.id = id;
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.editorial = editorial;
        this.price = price;
        this.stock = stock;
        this.fechaCreacion = fechaCreacion;
        this.link_image = link_image;
        this.IdCategory = IdCategory;
    }
}

module.exports = Book;