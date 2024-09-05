const db = require('../config/database');

class UsuarioRepository {
    create(nombre,correo,contraseña){
        const query = `
    INSERT INTO usuario (nombre, correo, contraseña) VALUES (?, ?, ?)`;
        return new Promise((resolve,reject) => {
            db.run(query,[nombre,correo,contraseña], (err) => {
                if(err) {
                    return reject(err);
                }
                resolve(this.lastID);
            });
        });
    }
    
    findAll(){
        const query = `SELECT * FROM usuario`;
        return new Promise((resolve,reject) => {
            db.all(query,[], (err,rows) => {
                if(err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }

    findById(id){
        const query = `SELECT * FROM usuario WHERE id = ?`;
        return new Promise((resolve,reject) => {
            db.get(query,[id], (err,row) => {
                if(err) {
                    return reject(err);
                }
                resolve(row);
            });
        });
    }

    update(id,nombre,correo,contraseña){
        const query = `UPDATE usuario SET nombre = ?, correo = ?, contraseña = ? WHERE id = ?`;
        return new Promise((resolve,reject) => {
            db.run(query,[nombre,correo,contraseña,id], (err) => {
                if(err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }

    delete(id){
        const query = `DELETE FROM usuario WHERE id = ?`;
        return new Promise((resolve,reject) => {
            db.run(query,[id], (err) => {
                if(err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }
}

module.exports = new UsuarioRepository();