const OrderMaster = require('../models/cassetteMaster')
const asyncHandler = require('express-async-handler')
const mongoose = require("mongoose");


const getOrderDetails = asyncHandler(async(req, res) => {
    try {
        const orderdetails = await OrderMaster.find({});
        res.status(200).json(orderdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const createOrder = asyncHandler(async(req, res) => {
    try {
        const orderdetails = await OrderMaster.create(req.body)
        res.status(200).json(orderdetails);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})
const getOrderDetail = asyncHandler(async(req, res) =>{
    try {
        const {id} = req.params;
        const orderdetails = await OrderMaster.findById(id);
        res.status(200).json(orderdetails);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const updateOrder = asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const orderdetails = await OrderMaster.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!orderdetails){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        const updatedOrder = await OrderMaster.findById(id);
        res.status(200).json(updatedOrder);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
});
const deleteOrder = async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid order ID format" });
      }
  
      const deletedOrder = await OrderMaster.findByIdAndDelete(id);
  
      if (!deletedOrder) {
        return res.status(404).json({ message: "Order not found" });
      }
  
      res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
      console.error("Error deleting order:", error);
      res.status(500).json({ message: "Server error" });
    }
  };
// const deleteOrder = asyncHandler(async (req, res) => {
//     try {
//       const { id } = req.params;
//       if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(400).json({ message: "Invalid order ID" });
//       }
//       await OrderMaster.findByIdAndDelete(id);
//       res.json({ message: "Order deleted successfully" });
//     } catch (error) {
//       console.error("Error deleting order:", error);
//       res.status(500).json({ message: "Server error" });
//     }
//   });
  
const getOrderbyField = asyncHandler(async (req, res) => {
    const { field, value } = req.query;
    try {
        if (!Array.isArray(field) || !Array.isArray(value)) {
            res.status(400).json({ error: "Fields and values must be arrays" });
            return;
        }
        const query = {};
        field.forEach((f, index) => {
            query[f] = value[index];
        });
        const users = await OrderMaster.find(query);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = {
    getOrderDetails,
    createOrder,
    getOrderDetail,
    updateOrder,
    deleteOrder,
    getOrderbyField
}