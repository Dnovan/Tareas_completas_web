const express = require('express');
const router = express.Router();

router.get('/categories', (req, res) => res.json({ mensaje: "Obtener todas las categorías" }));
router.get('/categories/:id', (req, res) => res.json({ mensaje: "Obtener una categoría por ID" }));
router.post('/categories', (req, res) => res.json({ mensaje: "Crear una categoría" }));
router.put('/categories/:id', (req, res) => res.json({ mensaje: "Actualizar una categoría por ID" }));
router.delete('/categories/:id', (req, res) => res.json({ mensaje: "Eliminar una categoría por ID" }));

module.exports = router;
