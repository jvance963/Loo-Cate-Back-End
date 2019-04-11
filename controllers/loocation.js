const express = require('express');
const router = express.Router();
const mongoose = require('../db/connection');
const { Loocation } = require('../models/index');

router.get('/', function(req, res) {
  Loocation.find({}).then(loocation => res.json(loocation));
});

router.post('./', (req, res) => {
  Loocation.create(req.body).then(loocation => res.redirect('/loocation'));
});

router.get('/:id', (req, res) => {
  Loocation.findOne({ _id: req.params.id }).then(loocation =>
    res.json(loocation)
  );
});

router.put('/:id', (req, res) => {
  console.log(req.params.id);
  Loocation.findOne({
    _id: req.params.id,
  }).then(loocation => {
    loocation.name = req.body.name;
    loocation.lat = req.body.lat;
    loocation.lng = req.body.lng;
    loocation.save(
      (err,
      loocation => {
        res.json(loocation);
      })
    );
  });
});

router.delete('/:id', (req, res) => {
  Loocation.findOneAndDelete({ _id: req.params.id }).then(loocation =>
    res.json('/loocation')
  );
});

module.exports = router;

// May need a comment to go to the post and need to be able to add that function
// instead of comment I could sort through with the up_vote function and closest
// the one with the most votes should be the one most recommended to go to.
