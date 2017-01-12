'use strict';

var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const env = 'development';


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Galvanize Reads' });
});


router.get('/book', function(req, res, next) {
  return knex('book')
        .then(book => {
        res.render('book', {
            book : book
        });
    });
});

router.get('/author', function(req, res, next) {
  return knex('author')
        .then(author => {
        res.render('author', {
            author : author
        });
    });
});

router.get('/book/:id', function(req, res, next) {
        knex('book')
          .where('id', req.params.id)
          .then(function(book) {
            res.render('bookview', book[0])
        })
    })

router.get('/addbook', function(req, res, next) {
       res.render('addbook');
    });

router.post('/addbook', (req, res, next) => {
        knex('book')
        .insert(req.body)
        .returning('id')
        .then(function(id) {
            res.redirect('/bookviews/' + id);
        });
    });

router.put('/editbook/:id', function(req, res, next) {
        knex('book')
          .where('id', req.params.id)
          .update(req.body)
          .then(function() {
                res.redirect('/bookview/' + req.params.id);
        })
    })

router.get('/bookview', function(req, res, next) {
           res.render('bookview');
        });


module.exports = router;
