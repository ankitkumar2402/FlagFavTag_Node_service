//import logger from '../logging/Logger';

  class SecureStoreService {
	#secureStoreClient;

	constructor(secureStoreClient) {
		this.#secureStoreClient = secureStoreClient;
	}

	async getSystemSecret(secretKey) {
		let secret;
		try {
			secret = await this.#secureStoreClient.getSystemSecret(secretKey);
			console.log("secretkey" + secret);
		} catch (error) {
			secret = '';
			console.log(`Error when calling getSystemSecret`, error);
		}
		return secret;
	}
}

module.exports = {SecureStoreService};
