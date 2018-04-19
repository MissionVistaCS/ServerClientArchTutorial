var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/index', function(req, res, next) {
  res.json({ info: { title: 'Express' } });
});

module.exports = router;
