const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// GET
app.get('/usuarios', (req, res) => {
    res.json(['Juan', 'Ana', 'Carlos']);
});

// POST
app.post('/usuarios', (req, res) => {
    const nuevoUsuario = req.body.nombre;
    res.json({ mensaje: `Usuario ${nuevoUsuario} agregado con éxito` });
});

// PUT
app.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensaje: `Usuario ${id} actualizado correctamente` });
});

// DELETE
app.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    res.json({ mensaje: `Usuario ${id} eliminado correctamente` });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
