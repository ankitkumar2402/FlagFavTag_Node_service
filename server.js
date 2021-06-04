const express = require('express');
const responseTime = require('response-time')
const {dbAccessDao} = require('./dbAccessLayer/dbAccessDao');
const {DB_NAME, DB_COLLECTION} = require('./db/Constants');
let {router, RouterHandle} = require('./routes/Routes');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(responseTime());

app.listen(4242, function(){
	console.log("server running on 4242");
});

let oRouter = RouterHandle();
app.use('/FlagFavTag', oRouter);

// app.get('/', function(req, res){
// 	res.send("Welcome To FlagFavService");	
// });



// async function main(){
// 	var MongoDbAccessDao = await new dbAccessDao();
// 	MongoDbAccessDao.connectDb(DB_NAME, DB_COLLECTION);
	
// }
// main();
