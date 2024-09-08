const UserService = require('../services/UserService');
const bcrypt = require('bcrypt');

class UserController {
    static async register(req, res) {
        console.log('Controlador de registro alcanzado');
        console.log('Datos recibidos:', req.body);
        
        try {
          const { username, password } = req.body;
          // Aquí iría tu lógica de registro
          const existingUser = await UserService.findUserByUsername(username);
          if (existingUser) {
            return res.status(400).json({ error: 'El usuario ya existe' });
          }

          // Hashear la contraseña
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(password, saltRounds);

          // Crear el nuevo usuario
          const newUser = await UserService.registerUser({username, password: hashedPassword});

          res.status(201).json({ message: 'Usuario registrado exitosamente', username: newUser.username });
        } catch (error) {
          console.error('Error en el registro:', error);
          res.status(500).json({ error: 'Error al registrar el usuario' });
        }
    }

    static login(req, res) {
        console.log('Controlador de inicio de sesión alcanzado');
        console.log('Datos recibidos:', req.body);
        
        try {
            const { username, password } = req.body;
            const user = UserService.findUserByUsername(username);
            if (!user) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            const isMatch = bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ error: 'Contraseña incorrecta' });
            }

            res.json({ message: 'Login exitoso', username: user.username });
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            res.status(500).json({ error: 'Error al iniciar sesión' });
        }
    }
}

module.exports = UserController;
