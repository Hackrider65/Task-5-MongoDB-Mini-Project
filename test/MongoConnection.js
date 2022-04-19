//connection
//require mongoose
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology',true);

before(function(done){
	mongoose.connect('mongodb://localhost/StigeAssignment',{useNewUrlParser:true,useFindAndModify:false});
	
	mongoose.connection.once('open',function(){
		console.log("Connection has been established...");
		done();
	}).on('error',function(){
		console.log("Connection Error: ",error);
	});
});

//Droppping the collection before every test.
/*beforeEach(function(done){
	mongoose.connection.collections.tasks.drop(function(){
		//console.log("Collection has been dropped before testing...");
		done();
	});
});*/