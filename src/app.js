const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'tu_secreto',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false, // Cambia a true si usas HTTPS
        maxAge: 24 * 60 * 60 * 1000 // 24 horas
    }
}));

//configurar vistas estáticas
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

//importing routes
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);
//const categoryRoutes = require('./routes/CategoryRoutes');
//app.use('/categories', categoryRoutes);
const bookRoutes = require('./routes/BookRoutes');
app.use('/books', bookRoutes);

// Render login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'users', 'login.html'));
});

// Render dashboard
app.get('/dashboard', (req, res) => {
    if (req.session.user && req.session.loggedin) {
        res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
    } else {
        res.redirect('/login');
    }
});

//initialize server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
