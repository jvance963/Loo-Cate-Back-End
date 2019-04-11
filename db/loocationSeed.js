const { Loocation } = require('../models/index');

Loocation.remove({}).then(_ => {
  Loocation.create({
    name: 'Starbucks',
    location: {
      lat: '38.836104',
      lng: '-77.15649789999999',
    },
    misc: 'This is the cleanest bathroom I have ever seend',
    up_vote: {
      type: '3',
      default: 0,
    },
    author: 'Jvance963',
  }).then(loocation => {
    console.log(loocation);
    process.exit();
  });
});
