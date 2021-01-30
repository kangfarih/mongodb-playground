const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar')


// Describe Test
describe('Deleting a record', () => {
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
    it('Delete one record from the database', (done) => {
        MarioChar.findOneAndRemove({
            name: 'Mario'
        }).then(function (result) {
            MarioChar.findOne({
                name: 'Mario'
            }).then(function (result) {
                assert(result === null);
                done();
            })
        })
    })

});