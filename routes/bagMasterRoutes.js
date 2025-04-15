const express = require('express')
const{getOrderDetails,createOrder,getOrderDetail,updateOrder,deleteOrder,getOrderbyField} = require('../controllers/bagMasterController')
const router = express.Router();

router.get('/',getOrderDetails);
router.get('/search', getOrderbyField);
router.get('/:id',getOrderDetail);
router.put('/:id',updateOrder);
router.delete('/:id',deleteOrder);
router.post('/', createOrder);


module.exports = router;
