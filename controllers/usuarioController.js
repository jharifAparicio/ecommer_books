const UsuarioService = require('../services/usuarioService');

class UsuarioController {
    async createUsuario(req,res){
        try {
            const {nombre,correo,contraseña} = req.body;
            const id = await UsuarioService.createUsuario(nombre,correo,contraseña);
            res.status(201).json({id: id, message: 'Usuario creado'});
        } catch(err) {
            res.status(500).json({message: err.message});
        }
    }

    async getUsuarios(req,res){
        try {
            const usuarios = await UsuarioService.getUsuarios();
            res.json(usuarios);
        } catch(err) {
            res.status(400).json({message: err.message});
        }
    }

    async getUsuarioById(req,res){
        try {
            const {id} = req.params;
            const usuario = await UsuarioService.getUsuarioById(id);
            if(!usuario){
                res.status(404).json({message: 'Usuario no encontrado'});
            }
            res.json(usuario);
        } catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    async updateUsuario(req,res){
        try {
            const {id} = req.params;
            const {nombre,correo,contraseña} = req.body;
            const changes = await UsuarioService.updateUsuario(id,nombre,correo,contraseña);
            if(changes == 0){
                res.status(404).json({message: 'Usuario no encontrado'});
            }
            res.json({message: 'Usuario actualizado'});
        } catch(err) {
            res.status(500).json({error: err.message});
        }
    }

    async deleteUsuario(req,res){
        try {
            const {id} = req.params;
            const changes = await UsuarioService.deleteUsuario(id);
            if(changes == 0){
                res.status(404).json({message: 'Usuario no encontrado'});
            }
            res.json({message: 'Usuario eliminado'});
        } catch(err) {
            res.status(500).json({error: err.message});
        }
    }
}

module.exports = new UsuarioController();