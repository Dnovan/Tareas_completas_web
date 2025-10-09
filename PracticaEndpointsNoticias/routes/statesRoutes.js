const express = require('express');
const router = express.Router();

router.get('/states', (req, res) => res.json({ mensaje: "Obtener todos los estados" }));
router.get('/states/:id', (req, res) => res.json({ mensaje: "Obtener un estado por ID" }));
router.post('/states', (req, res) => res.json({ mensaje: "Crear un estado" }));
router.put('/states/:id', (req, res) => res.json({ mensaje: "Actualizar un estado por ID" }));
router.delete('/states/:id', (req, res) => res.json({ mensaje: "Eliminar un estado por ID" }));

module.exports = router;
