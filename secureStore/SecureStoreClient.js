// import * as fileUtil from '../../util/fileUtil';
// //import logger from '../../logging/Logger';
// import {getSecureStoreServiceRequestTimeout} from '../../Environment';
// import { GetSystemSecretRequest } from '../../../protos/proxy/SecureStoreService_pb';

const fileUtil = require('../util/fileUtil');
const {getSecureStoreServiceRequestTimeout} = require('../Environment');
const {GetSystemSecretRequest} = require('./SecureStoreService_pb');



function SecureStoreClient(grpcClient, grpcMetadata){
	
	this._grpcClient = grpcClient;
	this._grpcMetadata = grpcMetadata;
	this.getSystemSecret = async function(secretKey) {
		return new Promise((resolve, reject) => {
			let serviceAccount = '';
			try {
				serviceAccount = fileUtil.readKSAToken();
				console.log("serviceAccount : "  + serviceAccount);
			} catch (e) {
				console.log(e);
			}
			// const getSystemSecretRequest = new GetSystemSecretRequest();
			// getSystemSecretRequest.setServiceAccountToken(serviceAccount);
			// getSystemSecretRequest.setSecretKey(secretKey);

			var reqObj = {
				"service_account_token": serviceAccount, 
				"secret_key": secretKey 
			};


			console.log("secretkey: " + secretKey);

			console.log(`Sending request to secure store`);
			// const metadata = new this._grpcMetadata();
			console.log("below is grpc client");
			console.log(this._grpcClient);
			this._grpcClient.getSystemSecret(reqObj, (err, response) => {
				if (err || !response) {
					console.log(response);
					console.log(`SecureStore Client Received err: ${err}`);
					reject(err);
				} else {
					console.log(`secure store secret response recieved successfully`);
					resolve(response);
				}
			});
		});
	}
}

function determineCallOptions() {
	const deadline = 15000 + new Date().getTime() + getSecureStoreServiceRequestTimeout();
	return { deadline};
}

module.exports = {SecureStoreClient}