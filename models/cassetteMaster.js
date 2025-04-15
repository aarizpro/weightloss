const mongoose = require("mongoose");

const cassetteMasterSchema = mongoose.Schema(
    {
        
        Cscode:{
            type:String,
            required:[true,"Enter the Cassette Code"]
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

const CassetteMaster = mongoose.model('CassetteMaster',cassetteMasterSchema);

module.exports = CassetteMaster;