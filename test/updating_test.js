const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar')


// Describe Test
describe('Updating a record', () => {
    var char;

    beforeEach(function (done) {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        })
        char.save().then(function () {
            done();
        });
    })

    // Finding test
    it('Update one record from the database', (done) => {
        MarioChar.findOneAndUpdate({
            name: 'Mario'
        }, {
            name: 'Luigi'
        }).then(function () {
            MarioChar.findOne({
                _id: char._id
            }).then(function (result) {
                assert(result.name === 'Luigi')
                done()
            })
        })
    })

    it('Increament the weight by 1', (done) => {
        MarioChar.update({}, {
            $inc: {
                weight: 1
            }
        }).then(function () {
            MarioChar.findOne({
                name: 'Mario'
            }).then(function (record) {
                assert(record.weight === 51)
                done();
            })
        })
    })

    
});