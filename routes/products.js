var express = require('express');
var router = express.Router();

var dummyData = require('../data/products.json');

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.json(dummyData);
});

module.exports = router;
