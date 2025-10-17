// routes/profiles.routes.js

const express = require('express');
const router = express.Router();

// Importamos el controlador
const profileController = require('../controllers/profile.controller.js');

// Definimos las rutas y las asociamos a las funciones del controlador

// GET /api/profiles -> Obtener todos los perfiles
router.get('/', profileController.get);

// GET /api/profiles/:id -> Obtener un perfil por su ID
router.get('/:id', profileController.getById);

// POST /api/profiles -> Crear un nuevo perfil
router.post('/', profileController.create);

// PUT /api/profiles/:id -> Actualizar un perfil
router.put('/:id', profileController.update);

// DELETE /api/profiles/:id -> Eliminar un perfil
router.delete('/:id', profileController.destroy);

module.exports = router;