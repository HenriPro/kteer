var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({

	oAuth: {
		type: Number,
		required: true,
		unique: true
	},
	username: {
		type: String
	},
	created: Date,
	aboutMe: {
		type: String,
		required: false
	},
	location: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: false
	},
	phoneNumber: {
		type: String,
		required: false
	},
	listing: {
		type: Array,
		required: false
	}
});

var User = mongoose.model('User', UserSchema)
module.exports = User;


