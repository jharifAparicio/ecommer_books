require ('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/CategoryRoutes');

//middleware
app.use(express.json());

//importing routes
app.use('/users', userRoutes);
app.use('/categories', categoryRoutes);

//initialize server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
