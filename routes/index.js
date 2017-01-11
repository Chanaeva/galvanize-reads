'use strict';

var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const env = 'development';



// Gets home page with seed data

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/book', function(req, res, next) {
  return knex('book')
        .then(book => {
          console.log(book);
            res.render('book', {
              book : book
            });
        });
});

// // New form to add task
// router.get('/new', function(req, res, next) {
//     res.render('new', {
//         title: 'stuff'
//     });
// });
//
// //  Gets detail view of one task
// router.get('/detail/:id', function(req, res, next) {
//         knex('list')
//             .where('id', req.params.id)
//             .then(function(task) {
//                 res.render('detail', task[0])
//             })
//     })
//     // display update page
// router.get('/detail/:id/update', function(req, res, next) {
//     knex('list')
//         .where('id', req.params.id)
//         .then(function(task) {
//             res.render('update', task[0])
//         })
// });
// // creates a new task and renders new task on detail page
// router.post('/new', (req, res, next) => {
//     knex('list')
//         .insert(req.body)
//         .returning('id')
//         .then(function(id) {
//             res.redirect('/detail/' + id);
//         });
// });
//
// // delete's task when finished and redirects to '/'
// router.delete('/detail/:id', function(req, res, next) {
//     knex('list')
//         .where('id', req.params.id)
//         .del()
//         .then(function() {
//             res.redirect('/');
//         })
// })
//
// // puts edited task on page
// router.put('/detail/:id', function(req, res, next) {
//     knex('list')
//         .where('id', req.params.id)
//         .update(req.body)
//         .then(function() {
//             res.redirect('/detail/' + req.params.id);
//         })
// })


module.exports = router;
