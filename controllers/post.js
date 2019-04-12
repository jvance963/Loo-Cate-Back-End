const express = require('express');
const router = express.Router();
const mongoose = require('../db/connection');
const { Post } = require('../models/index');

router.get('/', function(req, res) {
  Post.find({}).then(post => res.json(post));
});

router.post('./', (req, res) => {
  Post.create(req.body).then(post => res.redirect('/post'));
});

router.get('/:id', (req, res) => {
  Post.findOne({ _id: req.params.id }).then(post => res.json(post));
});

router.put('/:id', (req, res) => {
  console.log(req.params.id);
  Post.findOne({
    _id: req.params.id,
  }).then(loocation => {
    post.name = req.body.name;
    post.body = req.body.body;
    post.save(
      (err,
      post => {
        res.json(post);
      })
    );
  });
});

router.delete('/:id', (req, res) => {
  Post.findOneAndDelete({ _id: req.params.id }).then(post => res.json('/post'));
});

module.exports = router;

// May need a comment to go to the post and need to be able to add that function
