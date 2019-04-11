const express = require('express');
const router = express.Router();
const mongoose = require('../db/connection');
const { Bathroom } = require('../models/index');

router.get('/', function(req, res) {
  Bathroom.find({}).then(bathroom => {
    res.json(bathroom);
  });
});

router.get('/:id', function(req, res) {
  Bathroom.findOne({ _id: req.params.id }).then(bathroom => {
    res.json(bathroom);
  });
});

module.exports = router;
