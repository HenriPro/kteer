var mongoose = require("mongoose");

var ContractSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true,
		unique: true
	},
	estimatedHours: {
		type: Number,
		required: true
	},
	deadline: {
		type: Date,
		required: true
	}

});

var Contract = mongoose.model('Contract', ContractSchema)
module.exports = Contract;
