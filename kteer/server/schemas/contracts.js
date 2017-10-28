var mongoose= require ("mongoose");

var mongoClient = require('mongodb').mongoClient;

var ContractSchema = new mongoose.Schema({
    listingId: {
        type     : String,
        required : true
    },
    for: {
        type: String,
        required: true
    },
    estimatedHours: {
        type     : Number,
        required : true
    },
    deadline: {
        type :String,
        required :true
    },
    started: {
        type: String, 
        required: true
    }
});

var Contract = mongoose.model('Contract',ContractSchema)
module.exports = Contract ;