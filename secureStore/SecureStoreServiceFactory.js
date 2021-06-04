// import SecureStoreFactory from '../secureStore/Factory';
const SecureStoreFactory = require('./Factory');


async function getSecureStoreService() {
	return await SecureStoreFactory.createSecureStoreService();
}

module.exports = {getSecureStoreService};