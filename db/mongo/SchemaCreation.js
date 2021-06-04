function createSchema(){

    this.createTableSchema = function(db, collectionName){
        db.createCollection(collectionName, {
            validator: {
               $jsonSchema: {
                  bsonType: "object",
                  required: [ "tenantId", "boName", "boNodeName", "boNodeId", "uuid" ],
                  properties: {
    
                    tenantId: {
                       bsonType: "string",
                       description: "must be a string, unique and is required"
                    },
                    boName: {
                       bsonType: "string",
                       description: "must be a string, unique and is required"
                    },
                    boNodeName: {
                        bsonType: "string",
                        description: "must be a string, unique and is required"
                    },
                    boNodeId: {
                        bsonType: "string",
                        description: "must be a string, unique and is required"
                    },
                    uuid: {
                        bsonType: "string",
                        description: "must be a string, unique and is required"
                    },
                    
                    username:{
                        bsonType: "string",
                        description: "must be a strings"
                    },
                    type:{
                        bsonType: "string",
                        enum: ["F", "S", "T", ""],
                        description: "value should be empty or one of above F-Flag, S-Fav, T-Tag"
                    },
                    changedOn:{
                        bsonType: "date",
                        description: "must be a valid date"
                    },
                    changedBy:{
                        bsonType: "string",
                        description: "must be a string"
                    },
                    tagContent:{
                        bsonType: "string",
                        description: "must be a string"
                    },
                    stnUsername:{
                        bsonType: "string",
                        description: "must be a string"
                    },
                    stnType:{
                        bsonType: "string",
                        enum: ["F", "S", "T", ""],
                        description: "value should be empty or one of above F-Flag, S-Fav, T-Tag"
                    },
                    stnBoNodeId:{
                        bsonType: "string",
                        description: "must be a string, unique"
                    }
                 }
               }
            }
         });
    }
   
 }

 module.exports = {createSchema};