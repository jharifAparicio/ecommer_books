require ('dotenv').config();
const express = require('express');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de logging (para depuración)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
});

//importing routes
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

//routes
app.use('/api', bookRoutes);
app.use('/api/users', userRoutes);

// Manejador de errores 404
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

//initialize server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
