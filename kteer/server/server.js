var express = require('express')
var mongoose = require('mongoose');
var server = require('http').createServer(app);//
var bodyParser = require('body-parser');
var api = require('./api');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../dist'));


/////////////////////database//////////////////////////
var mongoURI = 'mongodb://localhost/kteerdb';
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI);
db = mongoose.connection;
db.once('open', function () {
	console.log('mongoDB is open');
});

app.use('/api', api);

app.get("*", ()=>{
	//TODO
})


////////////////////server////////////////////////////
var port = process.env.PORT || 3000;//

app.listen(port, function () {
  console.log(' app listening on port 3000!');//
});