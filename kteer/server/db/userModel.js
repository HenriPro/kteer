var mongoose= require ("mongoose");

var UserSchema = new mongoose.Schema({

	oAuth:{
		type     : String,
		required : true,
    unique   : true
	},
	aboutMe:{
		type :String,
		required :true
	},
	location:{
		type     : String,
		required : true
	},
	email:{
		type     : String,
		required : true
	},
	phoneNumber:{
		type     : String,
		required : true
	},
	listing :{
	  type     : Array,
		required : true
  }

});

var User = mongoose.model('User',UserSchema)
module.exports = User ;


