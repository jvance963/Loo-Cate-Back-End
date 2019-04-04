const express = require('express');
const router = express.Router();

router.use('/bathrooms', require('./bathrooms'));
router.use('/loocation', require('./loocation'));
router.use('/post', require('./post'));

module.exports = router;
