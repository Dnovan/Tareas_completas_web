// routes/AuthRoute.js

const express = require('express');
const router = express.Router();

const { login, register } = require('../controllers/AuthController');
const { validatorLogin, validatorRegister } = require('../validators/AuthValidator');

// Endpoint para el registro de un nuevo usuario
// URL: POST /api/auth/registro
router.post('/registro', validatorRegister, register);

// Endpoint para el login de un usuario
// URL: POST /api/auth/login
router.post('/login', validatorLogin, login);

module.exports = router;