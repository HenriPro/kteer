var mongoose= require ("mongoose");

var ListingSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description:{
    type:String,
    required:true
  },
  owner:{
    type: String,
    required: true  
  },
  pictures:{
    type:Array,
    required:false
  },
  pricing:{
    type:Number,
    required:false
  },
  category: {
    type: String,
    required: false
  }
});

var Listing = mongoose.model('Listing', ListingSchema)
module.exports = Listing ;