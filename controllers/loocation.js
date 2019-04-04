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

// Need to be able to add a comment to the location. But may not need that for MVP
