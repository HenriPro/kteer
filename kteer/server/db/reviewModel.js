var mongoose= require ("mongoose");

var ReviewSchema = new mongoose.Schema({

	userId:{
	  type: String,
    required: true
  },
  rating:{
	  type: Number,
    required: true
  },
  textReview:{
	  type: String,
    required: true
  }

});

var Review = mongoose.model('Review',ReviewSchema)
module.exports = Review ;
