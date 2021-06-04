 async function checkIndexVersionWorkaround(indexService, checkIndexResult) {
	//workaround to force creation of forecast and target indices to prepare for reindexing
	//force creation of forecast and target
	if(checkIndexResult.forecast && !checkIndexResult.forecast.exists){
		await indexService.createIndex('forecast', checkIndexResult.forecast.tenant);
		await indexService.createAlias('forecast', checkIndexResult.forecast.tenant);
	}

	if(checkIndexResult.target && !checkIndexResult.target.exists){
		await indexService.createIndex('target', checkIndexResult.forecast.tenant);
		await indexService.createAlias('target', checkIndexResult.forecast.tenant);
	}
}

module.exports = {checkIndexVersionWorkaround};
