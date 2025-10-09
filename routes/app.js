const express = require('express');
const app = express();
const usuariosRouter = require('./usuarios');
const PORT = 3000;

// Logging middleware para depuración
app.use((req, res, next) => {
    console.log(new Date().toISOString(), req.method, req.originalUrl);
    next();
});

app.use((req, res, next) => {
    console.log(`Se realizó una solicitud a: ${req.path}`);
    next();
});


app.use(express.json());
app.use('/usuarios', usuariosRouter);

// Handler 404 temporal para depuración (muestra mensaje claro)
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada (handler 404 del app.js)' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
