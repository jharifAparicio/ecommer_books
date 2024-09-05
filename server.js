require ('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

//importing routes
const bookRoutes = require('./routes/bookRoutes');

//middleware
app.use(express.json());

//routes
app.use('/api', bookRoutes);

//initialize server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});