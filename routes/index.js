var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 4' });
});


router.get('/sandra', function(req, res, next) {
  res.render('sandra', {
        myName: "Sandra",
        title: "Sandra"
      }
  );
});


router.get('/cory', function(req, res, next) {
  res.render('cory', {
    myName: "Cory",
    title: "Cory"
  }
  );
});


router.get('/kelsey', function(req, res, next) {
  res.render('kelsey', {
        myName: "Kelsey",
        title: "Kelsey"
      }
  );
});


router.get('/adam', function(req, res, next) {
  res.render('adam', {
        myName: "Adam",
        title: "Adam"
      }
  );
});

module.exports = router;
