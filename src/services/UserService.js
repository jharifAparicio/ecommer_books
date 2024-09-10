const bcrypt = require('bcryptjs');
const UserRepository = require('../repositories/UserRepository');

class UserService {
    static async createUser(names, username, email, password) {
        if (!names || !username || !email || !password) {
            throw new Error('Todos los campos son obligatorios');
        }
        
        //encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        const hasherPassword = await bcrypt.hash(password, salt);

        const user = {names, username, email, password: hasherPassword};
        return UserRepository.createUser(user);
    }

    static async getUserByUsername(username) {
        return await UserRepository.getUserByUsername(username);
    }

    static async getAllUser() {
        return await UserRepository.getAllUsers();
    }

    static async updatePassword(username, password) {
        const salt = await bcrypt.genSalt(10);
        const hasherPassword = await bcrypt.hash(password, salt);

        return await UserRepository.updatePassword(username, hasherPassword);
    }

    static async deleteUser(username) {
        return await UserRepository.deleteUser(username);
    }

    static async login(username, password) {
        //verificar si el usuario existe
        if(!username || !password){
            throw new Error('Usuario y contraseña son requeridos');
        }
        //obtener el usuario desde repositorio
        const user = await UserRepository.getUserByUsername(username);
        if(!user){
            throw new Error('Credenciales incorrectos');
        }

        //comparamos la contraseña proporcionada con la encriptada
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            throw new Error('Credenciales incorrectos');
        }
        return user;
    }
}

module.exports = UserService;