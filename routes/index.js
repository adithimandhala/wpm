var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Adithi' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Mandhala', message: 'Welcome to Mandhala Page!' });
});
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About Page', 
    message: 'Welcome to About Page!' 
  });
});
module.exports = router;
