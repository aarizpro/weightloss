const { date } = require("joi");
const mongoose = require("mongoose");

const orderMasterSchema = mongoose.Schema(
    {
        date:{
            type:Date,
            required:[true,"Enter the date"]
        },
        mobile:{
            type:String,
            required:[true,"Enter the Mobile No"]
        },
        name:{
            type:String,
            required:[true,"Enter the Customer Name"]
        },
        address:{
            type:String,
            required:[true,"Enter the Customer Address"]
        },
        pincode:{
            type:String,
            required:[true,"Enter the Pincode No"]
        },
        city:{
            type:String,
            required:[true,"Enter the City"]
        },
        email:{
            type:String,
            required:[true,"Enter the Email"]
        },
        
        product:{
            type:String,
            required:[true,"Enter the Product"]
        },
        
        weight:{
            type:String,
            required:[true,"Enter the Weight"]
        },
        user:{
            type:String,
            required:[true,"Enter the User"]
        },
    },
    {
        timestamps:true

    }
);

const OrderMaster = mongoose.model('OrderMaster',orderMasterSchema);

module.exports = OrderMaster;