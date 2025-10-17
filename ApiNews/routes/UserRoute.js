const express = require('express');
const router = express.Router();
const { get, getById } = require('../controllers/UserController');
const { authenticateAdmin } = require('../middlewares/jwt');

// Para ver a TODOS los usuarios, o a UNO, tienes que ser el ADMIN
router.get('/usuarios', authenticateAdmin, get);
router.get('/usuarios/:id', authenticateAdmin, getById);

module.exports = router;