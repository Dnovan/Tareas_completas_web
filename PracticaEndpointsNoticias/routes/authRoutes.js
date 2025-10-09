const express = require('express');
const router = express.Router();

router.post('/auth/login', (req, res) => {
  res.json({ mensaje: "Logearse en la API" });
});

router.post('/auth/registro', (req, res) => {
  res.json({ mensaje: "Registrarse en la API como Contribuidor" });
});

module.exports = router;
