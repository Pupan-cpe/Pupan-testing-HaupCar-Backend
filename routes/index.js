var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');
// const userCon
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//  login
router.get('/test', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', userController.index );

module.exports = router;
