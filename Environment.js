function getElasticSearchUrl() {
	return process.env.ELASTIC_SEARCH_HOST || 'http://localhost:9200';
}
 function getManagedElasticSearchUrl() {
	return process.env.MANAGED_ELASTIC_SEARCH_HOST || 'http://localhost:9200';
}

 function getClusterRegion() {
	return process.env.CLUSTER_REGION || 'us-west-2';
}

 function getSearchHost() {
	return process.env.SEARCH_HOST || 'localhost';
}

 function getHttpPort() {
	return process.env.HTTP_PORT || 8081;
}

 function getGrpcPort() {
	return process.env.GRPC_PORT || 50052;
}

 function getIamServiceUrl() {
	return process.env.IAM_SERVICE_URL || 'localhost:50051';
}

 function getIamServiceRequestTimeout() {
	return parseInt(process.env.IAM_SERVICE_REQUEST_TIMEOUT, 10) || 1000;
}

 function getISMetadataServiceRequestTimeout() {
	return parseInt(process.env.METADATA_SERVICE_REQUEST_TIMEOUT, 10) || 1000;
}

 function getSecureStoreServiceRequestTimeout() {
	return parseInt(process.env.SECURESTORE_SERVICE_REQUEST_TIMEOUT, 10) || 1000;
}

 function isRunningInK8S() {
	return !!process.env.KUBERNETES_SERVICE_HOST;
}

 function getAccessControlAllowOrigin() {
	return process.env.ACCESS_CONTROL_ALLOW_ORIGIN || 'Origin';
}

 function isDevelopmentMode() {
	return !isProductionMode();
}

 function isProductionMode() {
	 return true;
	return process.env.NODE_ENV === 'production';
}

 function isTestMode() {
	return process.env.NODE_ENV === 'test';
}

 function getReindexRetryTimeout() {
	return Number(process.env.REINDEX_RETRY_TIMEOUT) || 10000;
}

 function getNumberOfReplicas() {
	return process.env.ELASTIC_DEFAULT_NUMBER_OF_REPLICAS || '1';
}

 function getLoggerFormat() {
	return process.env.LOGGER_FORMAT;
}

 function getSecureStoreServiceUrl() {
	 if(process.env.SECURESTORE_SERVICE_URL ){
		return process.env.SECURESTORE_SERVICE_URL;
	 } else{
		return 'localhost:50053';
	 }
}

 function getMetadataServiceUrl() {
	return process.env.METADATA_SERVICE_URL || 'localhost:50058';
}

 function isIntegrationTest() {
	return process.env.INTEGRATION_TEST === 'INTEGRATION_TEST';
}

 function getIntegrationTestMongodbURI() {
	return process.env.MONGO_URI;
}

 function getEventServiceUrl() {
	return process.env.EVENT_SERVICE_URL || 'localhost:50059';
}

 function getSearchSubscriptionInfoRefreshInterval() {
	return Number(process.env.SEARCH_SUBSCRIPTION_INFO_REFRESH_INTERVAL) || 120000;
}

 function getDropIndicesExecutionPlan() {
	try {
		return JSON.parse(process.env.DROP_INDICES_EXECUTION_PLAN);
	} catch (e) {
		return {};
	}
}

module.exports = {getElasticSearchUrl, getManagedElasticSearchUrl, getClusterRegion, getSearchHost, getHttpPort, isTestMode,
	getGrpcPort, getIamServiceUrl, getIamServiceRequestTimeout, getISMetadataServiceRequestTimeout, getSecureStoreServiceRequestTimeout,
	isRunningInK8S, getAccessControlAllowOrigin, isDevelopmentMode, isProductionMode, isTestMode, getDropIndicesExecutionPlan,
	getSearchSubscriptionInfoRefreshInterval, getEventServiceUrl, getIntegrationTestMongodbURI, isIntegrationTest, getMetadataServiceUrl,
	getLoggerFormat, getSecureStoreServiceUrl, getNumberOfReplicas, getReindexRetryTimeout
};
