const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/nodejs_auth');

const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting in MongoDB"));

db.once('open',function(){
    console.log('connected to Database :: nodejs_auth');
});

