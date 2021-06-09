const express = require('express');
const router = require('express').Router();
const responseTime = require('response-time')
const {dbAccessDao} = require('./dbAccessLayer/dbAccessDao');
const {DB_NAME, DB_COLLECTION} = require('./db/Constants');
let {RouterHandle} = require('./routes/Routes');
let bodyParser = require('body-parser');
let cors = require('cors');


let oRouter = null;
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(responseTime());
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));
// addCORSHeadersToResponses(app);

//Root Route
app.use('/flagfavtag', router);

app.listen(4242, function(){
	console.log("server running on 4242");
});

RouterHandle(router);

// function addCORSHeadersToResponses(app) {
// 	app.use(function(request, response, next) {
// 		response.header('Access-Control-Allow-Credentials', 'true');
// 		// if (!isRunningInK8S() && ALLOWED_ORIGINS.includes(request.headers.origin)) {
// 		// 	response.header('Access-Control-Allow-Origin', request.headers.origin);
// 		// 	response.header('Access-Control-Allow-Headers', `Origin, X-Requested-With, Content-Type, Accept, ${HttpHeader.JsonWebTokenCookie}, ${HttpHeader.JsonWebTokenHeader}`);
// 		// } else {
// 			response.header('Access-Control-Allow-Origin', '*');
// 			response.header('Access-Control-Allow-Headers', `Origin, X-Requested-With, Content-Type, Accept, ${HttpHeader.JsonWebTokenCookie}`);
// 	//	}
// 		next();
// 	});
// }
// app.get('/', function(req, res){
// 	res.send("Welcome To FlagFavService");	
// });



// async function main(){
// 	var MongoDbAccessDao = await new dbAccessDao();
// 	MongoDbAccessDao.connectDb(DB_NAME, DB_COLLECTION);
	
// }
// main();
