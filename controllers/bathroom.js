const { Bathroom } = require('../models/index');

module.exports = {
  index: (req, res) => {
    bathroom.find({}).then(bathroom => {
      res.json(bathroom);
    });
  },

  show: (req, res) => {
    Bathroom.findOne({ _id: req.params.id }).then(bathroom => {
      res.json(bathroom);
    });
  },
};
