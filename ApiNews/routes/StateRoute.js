const express = require('express');
const router = express.Router();
const { get, create } = require('../controllers/StateController');
const { authenticateAdmin } = require('../middlewares/jwt');

router.get('/estados', get);
router.post('/estados', authenticateAdmin, create);

module.exports = router;