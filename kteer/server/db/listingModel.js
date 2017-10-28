var mongoose= require ("mongoose");

var ListingSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true 
  },
  desc:{
    type:String,
    required:true
  },
  picture:{
     type:Array,
    required:true
  },
  pricing:{
    type:Number,
    required:true
  },
	contract :{
	  type     : Array,
		required : true
  },
  category: {
    type: String,
    required: true
  }

});

var Listing = mongoose.model('User',ListingSchema)
module.exports = Listing ;
