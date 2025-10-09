const express = require('express');
const app = express();

const newsRoutes = require('./routes/newsRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const statesRoutes = require('./routes/statesRoutes');
const usersRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());

// Usar todas las rutas bajo /api
app.use('/api', newsRoutes);
app.use('/api', categoriesRoutes);
app.use('/api', statesRoutes);
app.use('/api', usersRoutes);
app.use('/api', authRoutes);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
