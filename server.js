require ('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//importing routes
const usuarioRoutes = require('./routes/usuarioRoutes');

//middleware
app.use(express.json());

//routes
app.use('/usuarios', usuarioRoutes);

//initialize server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});