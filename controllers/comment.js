const express = require('express');
const router = express.Router();
const mongoose = require('../db/connection');
const { Comment } = require('../models/index');

router.get('/', function(req, res) {
  Comment.find({}).then(comment => res.json(comment));
});

router.post('./', (req, res) => {
  Comment.create(req.body).then(comment => res.redirect('/post'));
});

router.get('/:id', (req, res) => {
  Comment.findOne({ _id: req.params.id }).then(comment => res.json(comment));
});

router.put('/:id', (req, res) => {
  console.log(req.params.id);
  Comment.findOne({
    _id: req.params.id,
  }).then(comment => {
    comment.body = req.body.body;
    comment.save(
      (err,
      comment => {
        res.json(comment);
      })
    );
  });
});

module.exports = router;

// May need a comment to go to the post and need to be able to add that function
// instead of comment I could sort through with the up_vote function and closest
// the one with the most votes should be the one most recommended to go to.
