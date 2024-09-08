const express = require('express');
const ecommerRoutes = require('../routes/ecommer_routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', ecommerRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;