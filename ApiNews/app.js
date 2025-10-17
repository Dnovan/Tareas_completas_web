const express = require('express');
const app = express();
const PORT = 3000;

// Conexión a la base de datos (esta línea debe ir antes de las rutas)
require('./config.db.js');

// Middleware para que la API entienda JSON
app.use(express.json());


// ===============================================
//           CARGA DE RUTAS
// ===============================================
// Cargamos los archivos de rutas tal como se llaman en tu carpeta "routes".

const state_routes = require('./routes/StateRoute.js');
const category_routes = require('./routes/CategoryRoute.js');
const new_routes = require('./routes/NewRoute.js');
const user_routes = require('./routes/UserRoute.js');

// Esta es la ruta para perfiles que sí existe en tu proyecto
const profileRoutes = require('./routes/profiles.routes.js'); 


// ===============================================
//              USO DE RUTAS
// ===============================================
// Le decimos a la aplicación qué rutas usar y bajo qué prefijo de URL.

// Usamos la ruta específica para perfiles bajo el endpoint /api/profiles
app.use('/api/profiles', profileRoutes);

// Agrupamos el resto de las rutas bajo el prefijo general /api
// Por ejemplo: /api/estados, /api/categorias, etc.
app.use('/api', state_routes, category_routes, new_routes, user_routes);


// ===============================================
//              INICIAR SERVIDOR
// ===============================================
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

module.exports = app;