var mongoose= require ("mongoose");

var mongoClient = require('mongodb').mongoClient;

var ContractSchema = new mongoose.Schema({
   userId:{
        type     : String,
        required : true,
    unique   : true
    },
    estimatedHours:{
        type     : Number,
        required : true
    },
    deadline:{
        type :Date,
        required :true
    }
});

var Contract = mongoose.model('Contract',ContractSchema)
module.exports = Contract ;