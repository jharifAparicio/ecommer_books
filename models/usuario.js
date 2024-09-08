class Usuario{
    constructor(id, nombre, correo, contraseña, fecha_creacion){
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.contraseña = contraseña;
        this.fecha_creacion = fecha_creacion;
    }
}

module.exports = Usuario;