const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => res.json({ mensaje: "Obtener todos los usuarios" }));
router.get('/users/:id', (req, res) => res.json({ mensaje: "Obtener un usuario por ID" }));
router.post('/users', (req, res) => res.json({ mensaje: "Crear un usuario" }));
router.put('/users/:id', (req, res) => res.json({ mensaje: "Actualizar un usuario por ID" }));
router.delete('/users/:id', (req, res) => res.json({ mensaje: "Eliminar un usuario por ID" }));

module.exports = router;
