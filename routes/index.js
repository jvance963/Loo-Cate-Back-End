const express = require('express');
const router = express.Router();

router.use('/bathroom', require('../controllers/bathroom'));
router.use('/loocation', require('../controllers/loocation'));
router.use('/post', require('../controllers/post'));

module.exports = router;
