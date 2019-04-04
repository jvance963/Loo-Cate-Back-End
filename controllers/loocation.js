const { Loocation } = require('../models/index');

module.exports = {
  index: function(req, res) {
    Loocation.find({}).then(loocation => {
      res.json(loocation);
    });
  },
  show: function(req, res) {
    Loocation.findOne({ _id: req.params.id }).then(loocation => {
      res.json(loocation);
    });
  },
  create: (req, res) => {
    Loocation.create(req.body).then(loocation => res.json(loocation));
  },
  update: (req, res) => {
    Loocation.findOne({ _id: req.params.id }).then(loocation => {
      loocation.fullName = req.body.fullName;
      loocation.save((err, loocation) => {
        res.json(loocation);
      });
    });
  },
  delete: function(req, res) {
    Loocation.findByIdAndRemove({ _id: req.params.id }).then(loocation => {
      res.json(loocation);
    });
  },
};

// May need a comment to go to the post and need to be able to add that function
// instead of comment I could sort through with the up_vote function and closest
// the one with the most votes should be the one most recommended to go to.
