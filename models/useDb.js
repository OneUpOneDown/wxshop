var crypto = require('crypto');
var mongodb = require('mongodb').MongoClient;
var settings = require('../dbSettings');


var selectData = function(db, callback) {  
 //连接到表  
 var collection = mongodb.collection('tb2');
 //查询数据
 var whereStr = {"name":'wilson001'};
 collection.find(whereStr).toArray(function(err, result) {
   if(err)
   {
     console.log('Error:'+ err);
     return;
   }    
   callback(result);
 });
}

module.exports = selectData;