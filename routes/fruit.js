var express = require('express');
var router = express.Router();
const fruitController = require('../controller/fruitController');
// const userCon
/* GET home page. */

router.get('/', fruitController.index );
// router.get('/getmodel', carController.carmodel);
router.post('/', fruitController.insertfruit);
router.put('/:id', fruitController.updatefruit);
router.delete('/:id', fruitController.deletefruit);



module.exports = router;
