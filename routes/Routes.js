const config = require('../db/config');
const {dbAccessDao} = require('../dbAccessLayer/dbAccessDao');
const { DB_NAME, DB_COLLECTION } = require('../db/Constants');
const Factory = require('../secureStore/SecureStoreHandling');


async function RouterHandle(router){
    this.oDbAccessDao = null;
    this.MongoDbAccessDao = null;
    let that= this;
    let uri = "";

    async function getMongoUri(){
        try{
            //Get credentials from secure store for mongo connection
            let secureStoreServiceCredentials = await Factory.getSystemSecretKeyFromSecureStore();
    
            //generate the Mongo Db url using secureStoreServiceCredentials
             uri = await config.getMongoDbUri(DB_NAME, secureStoreServiceCredentials);
             console.log("Mongo uri formed: "+ uri);
        } catch(e){
            console.log("Mongo uri failed: "+ e);
        }
        
       this.oDbAccessDao = new dbAccessDao();
       try{
        this.MongoDbAccess =  await this.oDbAccessDao.connectDb(DB_NAME, DB_COLLECTION, uri);
       } catch(e){
        console.log("dbAccess failed" + e);
       }
    };

    //getMongoUri.bind(this);
    setTimeout(getMongoUri.bind(this), 10000);
    

    router.get('/', function(req, res){
        //getMongoUri();
        if(that.oDbAccessDao && that.MongoDbAccess){
            res.status = 200;
            res.json({
                status: '200',
                data: "connection succesful"
            });
        }
        
    });

    //get All Flags, Favorites, tags data 
    router.get('/all', function(req, res){
        let query = null;
        if(req.query && req.query.username){
            query = {
                username:  JSON.parse(req.query.username)
            };
        }
        
        console.log("1..................." + (Date.now()));
        //var MongoDbAccessDao = new dbAccessDao();
        if( that.oDbAccessDao && that.MongoDbAccess){
            that.oDbAccessDao.getAll(query, that.MongoDbAccess).then(function(oResult){
                console.log("2..........." + Date.now());
                res.json({
                    status: '200',
                    data: oResult
                });
            });
        }
        
        
    });

    //getFlags based on username and other required keys
    router.get('/Flags', function(req, res){
        var MongoDbAccessDao = new dbAccessDao();
        MongoDbAccessDao.getFlags();
    });

    //getFav based on username and other required keys
    router.get('/Favs', function(req, res){
        var MongoDbAccessDao = new dbAccessDao();
        MongoDbAccessDao.getFlags();
    });

    router.get('/Tags', function(req, res){
        var MongoDbAccessDao = new dbAccessDao();
        MongoDbAccessDao.getFlags();
    });
    return router;
}




//Routes
//getPublicTags
//getPrivateTags
//getFavorites
//getFlagFavTag/Id
module.exports = {RouterHandle};