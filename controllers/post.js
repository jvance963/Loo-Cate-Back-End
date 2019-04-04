const { Post } = require('../models/index');

module.exports = {
  index: function(req, res) {
    Post.find({}).then(post => {
      res.json(post);
    });
  },
  show: function(req, res) {
    Post.findOne({ _id: req.params.id }).then(post => {
      res.json(post);
    });
  },
  create: (req, res) => {
    Post.create(req.body).then(post => res.json(post));
  },
  update: (req, res) => {
    Post.findOne({ _id: req.params.id }).then(post => {
      post.author = req.body.author;
      post.save((err, post) => {
        res.json(post);
      });
    });
  },
  delete: function(req, res) {
    Post.findByIdAndRemove({ _id: req.params.id }).then(post => {
      res.json(post);
    });
  },
};

// May need a comment to go to the post and need to be able to add that function
