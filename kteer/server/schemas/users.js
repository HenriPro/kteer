
var mongoose= require ("mongoose");

var UserSchema = new mongoose.Schema({
	oAuth:{
		type     : String,
		required : true,
    unique   : true
	},
	name: {
		type    : String
	},
	created: Date,
	aboutMe:{
		type 	 : String,
		required : false
	},
	location:{
		type     : String,
		required : false
	},
	email:{
		type     : String,
		required : false
	},
	phoneNumber:{
		type     : String,
		required : false
	},
	listing :{
	    type     : Array,
	    required : false
  }

});

module.exports = mongoose.model('User', UserSchema);