const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const passport = require('./config/passport')();
const userController = require('./controllers/user.js');

const app = express();

app.use(cors());
app.use(parser.json());
app.use(passport.initialize());

app.use('/user', userController);

// app.use(require('./routes/index.js'));
app.get('/locations', function(req, res) {
  res.json({
    result: [
      {
        name: 'that place',
        lat: 38.8304,
        lng: 77.1964,
        misc: 'garbage',
        up_vote: 0,
        author: 'mickey mouse',
      },
      {
        name: 'that place',
        lat: 38.8704,
        lng: 77.2464,
        misc: 'garbage2',
        up_vote: 0,
        author: 'mickey mouse',
      },
    ],
  });
});
app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), () => {
  console.log('✅ port: ' + app.get('port'));
});
