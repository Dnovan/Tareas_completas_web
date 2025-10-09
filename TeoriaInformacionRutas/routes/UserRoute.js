const express = require('express');
const api = express.Router();

api.get('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ param: userId })
});

api.get('/usuarios', (req, res) => {
  const nombre = req.query.nombre;
  const edad = req.query.edad;
  res.json({ querys: req.query })
});

api.post('/usuarios', (req, res) => {
  const usuario = req.body;
  res.json({ body: req.body })
});

module.exports = api;
