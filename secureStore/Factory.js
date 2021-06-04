const { getSecureStoreServiceUrl } = require('../Environment');
const {SecureStoreService} = require('./SecureStoreService');
const {SecureStoreClient} = require('./SecureStoreClient');
const grpc = require('@grpc/grpc-js');
const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = path.resolve(__dirname , '../protos/SecureStoreService.proto');

//const { SecureStoreServiceClient } = require('./SecureStoreService_grpc_pb');


async function createSecureStoreService() {
	return new SecureStoreService(await createSecureStoreClient());
}

 async function create() {
	return new Factory();
}

async function createSecureStoreClient() {
	return new SecureStoreClient(await createGrpcClient(), grpc.Metadata);
}

async function createGrpcClient() {
	const secureStoreServiceUrl = getSecureStoreServiceUrl();
	console.log(`secureStoreServiceUrl for gRPC client: ${secureStoreServiceUrl}`);
	var packageDefinition = protoLoader.loadSync( 
		PROTO_PATH, 
		{keepCase: true, 
		longs: String, 
		enums: String, 
		defaults: true, 
		oneofs: true 
		}); 
	var protoDescriptor = grpc.loadPackageDefinition(packageDefinition); 
	var securestoreservice = protoDescriptor.com.sap.crm.securestoreserviceproto; 
	var secureStoreServiceClient = new securestoreservice.SecureStoreService(secureStoreServiceUrl, grpc.credentials.createInsecure()); 
	console.log("factory:" + secureStoreServiceClient);
	return secureStoreServiceClient;

	//return new SecureStoreServiceClient(secureStoreServiceUrl, grpc.credentials.createInsecure());
}

module.exports = { create, createSecureStoreService, createSecureStoreClient, createGrpcClient}
