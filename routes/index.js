var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// get about page
router.get('/about', function(req, res, next) {
  res.render('about', {title: 'About'});
});

// get contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'Contact'});
});

// get error page

module.exports = router;
