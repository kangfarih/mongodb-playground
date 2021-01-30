const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar')


// Describe Test
describe('Finding a record', () => {

    var char;

    beforeEach(function (done) {
        char = new MarioChar({
            name: 'Mario'
        })
        char.save().then(function () {
            done();
        });
    })

    // Finding test
    it('Find one record from the database', (done) => {
        MarioChar.findOne({
            name: 'Mario'
        }).then(function (result) {
            assert(result.name === 'Mario');
            done();
        })
    })

    it('Find one record by ID from the database', (done) => {
        MarioChar.findOne({
            _id: char._id
        }).then(function (result) {
            assert(result._id.toString() === char._id.toString());
            done();
        })
    })

});