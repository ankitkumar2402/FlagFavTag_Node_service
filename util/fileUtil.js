// import fs from 'fs';

const fs = require('fs');

 function readKSAToken() {
	 try{
		//for local
		// var sVal = "JWt Token get it from iam service"
		// return sVal;

		//for deployed
		return fs.readFileSync('/var/run/secrets/kubernetes.io/serviceaccount/token', 'utf-8');
	 }catch(e){
		console.log(e);
	 }
	
}

module.exports = {readKSAToken};