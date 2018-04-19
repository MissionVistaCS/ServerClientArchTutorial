var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/users', function(req, res, next) {
  res.json({ info: { title: 'Users', users: [{firstName: 'Andrew', lastName: 'Yates'}, {firstName: 'Jolly', lastName: 'Rogers'}] }});
});

module.exports = router;
