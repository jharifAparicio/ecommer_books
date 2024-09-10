const UserService = require('../services/UserService');

class UserController {
    static async create(req, res) {
        const { names, username, email, password } = req.body;
        try {
            const result = await UserService.createUser(names, username, email, password);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getbyUsername(req, res) {
        const { username } = req.params;

        try {
            const user = await UserService.getUserByUsername(username);
            if (!user) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }
            res.json(user);
        }catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getAllUser(req, res) {
        try{
            const users = await UserService.getAllUser();
            res.json(users);
        }catch(error){
            res.status(500).json({ error: error.message });
        }
    }

    static async updatePassword(req, res) {
        const { username } = req.params;
        const { newPassword } = req.body;

        if (!newPassword) {
            return res.status(400).json({ error: 'La nueva contraseña es requerida' });
        }

        try {
            const result = await UserService.updatePassword(username, newPassword);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message});
        }
    }

    static async deleteUser(req, res) {
        const { username } = req.params;

        try {
            const result = await UserService.deleteUser(username);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async login(req, res) {
        const { username, password } = req.body;

        try {
            const user = await UserService.login(username, password);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserController;