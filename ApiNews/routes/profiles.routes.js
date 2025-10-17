const express = require('express');
const router = express.Router();
const { get, getById, create, update, destroy } = require('../controllers/profile.controller.js');
const { authenticateAdmin } = require('../middlewares/jwt');

router.get('/perfiles', get);
router.get('/perfiles/:id', getById);
router.post('/perfiles', authenticateAdmin, create);
router.put('/perfiles/:id', authenticateAdmin, update);
router.delete('/perfiles/:id', authenticateAdmin, destroy);

module.exports = router;