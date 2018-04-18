var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Users', users: [{firstName: 'Andrew', lastName: 'Yates'}, {firstName: 'Jolly', lastName: 'Rogers'}] });
});

module.exports = router;
