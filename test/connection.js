const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

before(function (done) {

    // Connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    mongoose.connection.once('open', function () {
        console.log('Connection has been made');
        done();
    }).on('error', function () {
        console.log('Connection error');
    })

})

// Drop the char collection before every test 
beforeEach(function (done) {
    // Drop the collection
    mongoose.connection.collections.mariochars.drop(function () {
        done();
    })
})