const express = require('express');
const app = express();
const cors = require('cors');
const { PORT } = require("./config");

// Middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Conexión a la DB
require('./config.db.js');

// ===============================================
//           CARGA DE RUTAS
// ===============================================
const profileRoutes = require('./routes/profiles.routes.js');
const authRoutes = require('./routes/AuthRoute.js');
const stateRoutes = require('./routes/StateRoute.js');
const categoryRoutes = require('./routes/CategoryRoute.js');
const newRoutes = require('./routes/NewRoute.js');
const userRoutes = require('./routes/UserRoute.js');

// ===============================================
//              USO DE RUTAS (LA FORMA A PRUEBA DE PENDEJOS)
// ===============================================
// CADA PUTA RUTA CON SU PROPIO PUTO PREFIJO. NO HAY PUTO PEDO.
app.use('/api/profiles', profileRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/states', stateRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/news', newRoutes);
app.use('/api/users', userRoutes);

// ===============================================
//              INICIAR SERVIDOR
// ===============================================
app.listen(PORT, () => {
    console.log(`¡A JALAR, PENDEJO! Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;