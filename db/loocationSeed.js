const { Loocation } = require('../models/index');

Loocation.remove({}).then(_ => {
    Loocation.create({
        Name = 'Starbucks',
        lat = '38.836104',
        lng = '-77.15649789999999'
    }).then(loocation => {
        console.log(loocation);
        process.exit();
    });
});