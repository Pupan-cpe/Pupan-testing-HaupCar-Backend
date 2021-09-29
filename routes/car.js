var express = require('express');
var router = express.Router();
const carController = require('../controller/carControlller');
// const userCon
/* GET home page. */

router.get('/car', carController.index );

module.exports = router;
