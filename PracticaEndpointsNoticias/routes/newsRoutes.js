const express = require('express');
const router = express.Router();

// Obtener todas las noticias
router.get('/news', (req, res) => {
  res.json({ mensaje: "Obtener todas las noticias" });
});

// Obtener una noticia por id
router.get('/news/:id', (req, res) => {
  res.json({ mensaje: "Obtener una noticia por ID" });
});

// Crear una noticia
router.post('/news', (req, res) => {
  res.json({ mensaje: "Crear una noticia" });
});

// Actualizar una noticia por id
router.put('/news/:id', (req, res) => {
  res.json({ mensaje: "Actualizar una noticia por ID" });
});

// Eliminar una noticia por id
router.delete('/news/:id', (req, res) => {
  res.json({ mensaje: "Eliminar una noticia por ID" });
});

module.exports = router;
