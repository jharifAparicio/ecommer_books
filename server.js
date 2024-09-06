require ('dotenv').config();
const express = require('express');
const app = express();

//importing routes
const usuarioRoutes = require('./routes/usuarioRoutes');
const userRoutes = require('./routes/userRoutes');

//middleware
app.use(express.json());

//routes
app.use('/usuario', usuarioRoutes);
app.use('/api/users', userRoutes);

//initialize server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
