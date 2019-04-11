const { Bathroom } = require('../models/index');

Bathroom.remove({}).then(_ => {
  Bathroom.insertMany([
    {
      Name: 'Starbucks',
      Street: '6365 Columbia Pike',
      City: 'Falls Church',
      State: 'Virginia',
      ZipCode: '22041',
    },
  ]).then(bathroom => {
    console.log(bathroom);
    process.exit();
  });
});
