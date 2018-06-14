var express = require('express');
var router = express.Router();

// GET users listing - test
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Login related routes


module.exports = router;