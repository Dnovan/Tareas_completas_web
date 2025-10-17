const express = require('express');
const router = express.Router();
const { get, create } = require('../controllers/NewController');
const { authenticateAny } = require('../middlewares/jwt');

router.get('/noticias', get); // Todos pueden ver
router.post('/noticias', authenticateAny, create); // CUALQUIERA con un token válido puede crear

module.exports = router;