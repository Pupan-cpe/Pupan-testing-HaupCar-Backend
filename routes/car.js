var express = require('express');
var router = express.Router();
const carController = require('../controller/carControlller');
// const userCon
/* GET home page. */

router.get('/', carController.index );
router.get('/getmodel', carController.carmodel);
router.post('/', carController.insertcar);
router.put('/:id', carController.updatecar);
router.delete('/:id', carController.deletecar);



module.exports = router;
