const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');


// Describe our tests
describe('Nesting records', function () {

    // drop collection before each test
    beforeEach(function (done) {
        mongoose.connection.collections.authors.drop(function () {
            done();
        })
    })

    // Create Tests
    it('Create a author with sub-documents', function (done) {

        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{
                title: 'Name of the Wind',
                pages: 400
            }]
        });

        pat.save().then(function () {
            Author.findOne({
                name: 'Patrick Rothfuss'
            }).then(function (record) {
                assert(record.books.length === 1);
                done()
            })
        })
    })


    it('Add a book to an Author', function (done) {

        var pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{
                title: 'Name of the Wind',
                pages: 400
            }]
        });

        pat.save().then(function () {
            Author.findOne({
                name: 'Patrick Rothfuss'
            }).then(function (record) {
                // add a book to the books array
                record.books.push({
                    title: "Wise Man's Fear",
                    pages: 500
                })
                record.save().then(function () {
                    Author.findOne({
                        name: 'Patrick Rothfuss'
                    }).then(function (result) {
                        assert(result.books.length === 2);
                        done();
                    })
                })
            })
        })
    })
})