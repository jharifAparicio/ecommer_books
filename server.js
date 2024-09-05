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

//middleware
app.use(express.json());

//routes
app.use('/api', bookRoutes);

//initialize server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
