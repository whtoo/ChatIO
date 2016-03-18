var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("walk on!");
  //Stream mode: new Buffer('user list')
  //String mode: 'reutrn String'
  //HTML   mode extends String: "<p>whtoo</p>"
});

module.exports = router;
