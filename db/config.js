const env = require('../Environment');
// const Factory = require('../secureStore/SecureStoreServiceFactory');
const Factory = require('../secureStore/SecureStoreHandling');

 async function getMongoDbUri(dbName) {
	if (env.isIntegrationTest()) {
		return env.getIntegrationTestMongodbURI() + '/' + dbName;
	}
	if (env.isProductionMode()) {
		const secretKey = 'mongodb-atlas-td';

		if(!this.oValue){
			try {
				const secureStoreService = await Factory.getSystemSecretKeyFromSecureCtore().catch(function(err){
					console.log(err);
				});
				if (secureStoreService) {
					console.log("secureStoreService : " + JSON.stringify(secureStoreService));
					//const oValue = await secureStoreService.getSystemSecret(secretKey);
					this.oValue = JSON.parse(oValue.secret_value);
				}
			} catch (e) {
				console.log(`error fetching mongodb credentails from securestore service`, e);
			}
		}
		
		return `mongodb+srv://${this.oValue.username}:${this.oValue.password}@${this.oValue.hostname}/${dbName}?retryWrites=true&w=majority`;
	}
	return 'mongodb://localhost:27017';
}

module.exports = { getMongoDbUri };
