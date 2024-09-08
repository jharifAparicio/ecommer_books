const UsuarioRepository = require('../repositories/usuarioRepository');

class UsuarioService {
    async createUsuario(nombre,correo,contraseña){
        return UsuarioRepository.create(nombre,correo,contraseña);
    }

    async getUsuarios(){
        return UsuarioRepository.findAll();
    }

    async getUsuarioById(id){
        return UsuarioRepository.findById(id);
    }

    async updateUsuario(id,nombre,correo,contraseña){
        return UsuarioRepository.update(id,nombre,correo,contraseña);
    }

    async deleteUsuario(id){
        return UsuarioRepository.delete(id);
    }
}

module.exports = new UsuarioService();