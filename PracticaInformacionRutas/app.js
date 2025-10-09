const express = require('express');
const user_routes = require('./routes/UserRoute');

const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Usar las rutas
app.use('/api', user_routes);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
