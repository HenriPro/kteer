
var mongoose= require ("mongoose");

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    aboutMe:{
        type :String,
        required :false
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
    listings :{
      type     : Array,
      required : false
  }
});

module.exports = mongoose.model('User', UserSchema);