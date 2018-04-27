const mongoose = require('mongoose');

const database = process.env.MONGODB_URI ||
                'mongodb://localhost:27017/loginExample';

mongoose.connect(database)
  .then(() => {
    console.log(`database up on ${database}`);
  })
  .catch(() => {
    console.log('unable to connect to database');
  })


module.exports = mongoose;
