const express = require('express');
const router = express.Router();
const { get, create } = require('../controllers/CategoryController'); // Asumiendo que solo tienes estas
const { authenticateAdmin } = require('../middlewares/jwt');

router.get('/categorias', get); // Ver es para todos
router.post('/categorias', authenticateAdmin, create); // Crear es solo para el puto JEFE

module.exports = router;