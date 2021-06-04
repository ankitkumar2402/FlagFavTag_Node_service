let router = require('express').Router();
const {dbAccessDao} = require('../dbAccessLayer/dbAccessDao');
const { DB_NAME, DB_COLLECTION } = require('../db/Constants');
const querystring = require('querystring');


function RouterHandle(){
    this.MongoDbAccessDao = null;
    let that= this;
    this.oDbAccessDao = new dbAccessDao();
    this.oDbAccessDao.connectDb(DB_NAME, DB_COLLECTION).then(function(db){
        this.MongoDbAccess = db;
    });
    //get All Flags, Favorites, tags data 
    router.get('/', function(req, res){
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
module.exports = {router, RouterHandle};