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

router.get('/bookview/:id', function(req, res, next) {
  return knex('book')
        .where('id', req.params.id)
        .first()
        .then(book => {
        res.render('bookview', {
          book : book
       });
    });
});

router.delete('/book/:id', function(req, res, next) {
  return knex('book')
        .where('id', req.params.id)
        .del(req.body)
        .then(book => {
        res.redirect('/deletebook', {
       });
    });
  });

router.get('/addbook', function(req, res, next) {
       res.render('addbook');
    });

router.post('/addbook', (req, res, next) => {
        knex('book')
        .insert(req.body)
        .returning('id')
        .then( book => {
          res.redirect('/book');
        });
    });


// router.put('/editbook/:id', function(req, res, next) {
//            knex('book')
//           .where('id', req.params.id)
//           .update(req.body)
//           .then( book =>  {
//             res.redirect('/bookview');
//         })
//     })


module.exports = router;
