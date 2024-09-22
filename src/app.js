require ('dotenv').config();
const express = require('express');
const app = express();

//importing routes
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/CategoryRoutes');
const bookRoutes = require('./routes/BookRoutes');

//middleware
app.use(express.json());

//importing routes
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);
app.use('/books', bookRoutes);

//initialize server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
