const {MongoClient} = require('mongodb');
const express = require('express');
const config = require('../db/config');
const { DB_NAME, DB_COLLECTION } = require('../db/Constants');
const properties = require('../db/mongo/SchemaCreation');
const {createSchema} = require('../db/mongo/SchemaCreation');

function dbAccessDao(){
	this.dbName = DB_NAME;
	this.dbCollection = DB_COLLECTION;
	const app = express();
	this.createCollectionWithSchema = createSchema;

	this.connectDb = async function(dbName, dbCollection, uri){
		this._dbName = dbName;
		this._dbCollection = dbCollection;
		try {
			var that = this;
			var options = {
				useNewUrlParser: true, 
				useUnifiedTopology: true 
			};
			
			return new Promise(function(resolve, reject){
				console.log("5.........." + Date.now());
				MongoClient.connect(uri, options, function(oError, db){
					console.log("4........" + Date.now());
					//console.log('mongodb started');
					if(db){
						that.db = db.db(that._dbName);
						that.ifCollectionExists(that.db, that._dbCollection).then(function(bExist){
							if(!bExist){
								that.createCollection(that.db, that._dbCollection);
								resolve(db);
								console.log('mongodb started');
							}
							resolve(db);
							console.log('mongodb started');
						});
					}
				});
			});
			
			
		} catch (e) {
			console.log(`Failed to connect to mongodb, error: ${e}`);
		}
	};

	this.createCollection = async function(db, collectionName){
		if(db){
			var oResult = new this.createCollectionWithSchema();
			oResult.createTableSchema(db, collectionName);
		}
	};

	this.ifCollectionExists = async function(db, dbCollection){
		return new Promise(function(resolve, reject){
			db.listCollections({name: dbCollection}).toArray(function(err, result){
				if(result.length > 0){
					resolve(true);
				};
				resolve(false);
			})
		})
		
	}

	this.getAll = async function(query, MongoDbAccess){
		let that = this;
		let aItems = [];
		return new Promise(function(resolve, reject){
			console.log(Date.now() + "...............calling connectivity")
			if(MongoDbAccess){
				that.db = MongoDbAccess.db(that._dbName);				
				//Read data
				var cursor = that.db.collection(that.dbCollection).find(query);
				var self = that;
				cursor.each(function(err, item) {
					if(item == null) {
						//MongoDbAccess.close(); // main db connection closure
						resolve(aItems);
					}
					if(item){
						aItems.push(item);
					}
				});

				
			}
		});
	};

	
	
}

// app.get('/get', (req, res) => {

// 	new Promise(function(resolve, reject){
// 		connectDb(dbname);
// 		resolve("Connection Succesful");
// 	}).then(function(oResult){
// 		res.send(oResult);
// 	});
// });

module.exports = {dbAccessDao};