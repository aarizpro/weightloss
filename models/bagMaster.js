const mongoose = require("mongoose");

const bagMasterSchema = mongoose.Schema(
    {
        
        Code:{
            type:String,
            required:[true,"Enter the Bag Code"]
        },
        AtmId:{
            type:String,
            required:[true,"Enter the ATM ID"]
        },
        MspAccount:{
            type:String,
            required:[true,"Enter the Msp Account"]
        },
        BankCode:{
            type:String,
            required:[true,"Enter the Bank Code"]
        },
        Route:{
            type:String,
            required:[true,"Enter the Route"]
        },
        RouteName:{
            type:String,
            required:[true,"Enter the Route Name"]
        }
    },
    {
        timestamps:true

    }
);

const BagMaster = mongoose.model('BagMaster',bagMasterSchema);

module.exports = BagMaster;