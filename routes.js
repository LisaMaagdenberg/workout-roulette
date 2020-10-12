const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');
// const jsonReader = require('./functions/jsonFileReader.js')

// front-end stuff
router.get('/', (req, res) => {res.render('index')});
router.get('/error', (req, res) => {res.render('index')});
// router.get('/admin', (req, res) => {res.render('index')});
// router.get('/blog', (req, res) => {res.render('index')});
// router.get('/shop', (req, res) => {res.render('index')});
// router.get('/about', (req, res) => {res.render('index')});
// router.get('/freepatterns', (req, res) => {res.render('index')});
// router.get('/books', (req, res) => {res.render('index')});

// back-end stuff
// router.get('/blog/all', (req, res) => {
//   // temp solution, I nee database
//   fs.readdir('./public/blogs', (err, files) => {
//     var all = [];
//     for (var i = 0; i < files.length; i++) {
//       var index = i;
//       jsonReader('./public/blogs/'+files[i], function(response) {
//         all.push(response)
//         var indexPlusOne = index + 1;
//       })
//     }
//     setTimeout(function() {
//       res.send(all)
//     }, 100)
//   });
// });

// router.get('/books/all', (req, res) => {
//   // temp solution, I need database
//   fs.readdir('./public/books', (err, files) => {
//     var all = [];
//     for (var i = 0; i < files.length; i++) {
//       var index = i;
//       jsonReader('./public/books/'+files[i], function(response) {
//         all.push(response)
//         var indexPlusOne = index + 1;
//       })
//     }
//     setTimeout(function() {
//       res.send(all)
//     }, 100)
//   });
// });

module.exports = router;
