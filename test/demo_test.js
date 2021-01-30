const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar')


// Describe Test
describe('Saving record', () => {
    // Create test
    it('Saves a record to the database', (done) => {
        var char = new MarioChar({
            name: 'Mario'
        })
        char.save().then(function () {
            assert(char.isNew === false);
            done();
        });
    })

    // Update Test
    // it("Update a record from the database", () => {

    // })
    
});