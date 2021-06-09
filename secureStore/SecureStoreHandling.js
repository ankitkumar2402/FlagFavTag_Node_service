const grpc = require('@grpc/grpc-js');
const path = require('path');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = path.resolve(__dirname , '../protos/SecureStoreService.proto');
const { getSecureStoreServiceUrl } = require('../Environment');
const fileUtil = require('../util/fileUtil');


async function getSystemSecretKeyFromSecureStore(){
    // Suggested options for similarity to existing grpc.load behavior 
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
    const secureStoreServiceUrl = getSecureStoreServiceUrl();
    console.log("URL for Secure Store : "+secureStoreServiceUrl);
    var secureStoreServiceClient = new securestoreservice.SecureStoreService(secureStoreServiceUrl, grpc.credentials.createInsecure()); 
    // var token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiJ9.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJkZWZhdWx0Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9zZWNyZXQubmFtZSI6ImRlZmF1bHQtdG9rZW4tem03OXAiLCJrdWJl
    
    let serviceAccountToken = '';
    try {
        serviceAccountToken = fileUtil.readKSAToken();
        console.log("serviceAccount11111 : "  + serviceAccountToken);
    } catch (e) {
        console.log(e);
    }
        
        
    var reqObj = { 
        "service_account_token": serviceAccountToken, 
        "secret_key": "mongodb-atlas-td" 
    } 

    console.log("Request sending to getSystemSecret...");
    let oSecureStoreCredentials = await new Promise(function(resolve, reject){
        secureStoreServiceClient.getSystemSecret(reqObj,function(err, resp){ 
            if(err) {
                reject(err);
                console.log(err);
            } 
            if(resp){ 
                resolve(resp);
                console.log('rep came------------------'); 
                console.log(resp) 
            } 
        })
    });
    console.log("credentials:" + oSecureStoreCredentials);
    return oSecureStoreCredentials;

    
}

module.exports = { getSystemSecretKeyFromSecureStore}



