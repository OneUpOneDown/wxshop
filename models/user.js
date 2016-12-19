var crypto = require('crypto');
var mongodb = require('mongodb').MongoClient;
var settings = require('../dbSettings');

function User(user){
	this.loginCode = user.loginCode;
	this.passWord = user.passWord;
	this.time = user.time;
}
module.exports = User;

User.prototype.save = function(callback){
	var user = {
		loginCode: this.loginCode,
		passWord: this.passWord,
		time: this.time
	}
	mongodb.connect(settings.url,function(err, db){
		if(err){
			return callback(err);
		}
		db.collection('user', function(err, collection){
			if(err){
				db.close();
				return callback(err);
			}
			collection.insert(user,{
				safe: true
			},function(err, user){
				db.close();
				if(err){
					return callback(err);
				}
				callback(null, user[0]);
			})
		})
	})
}
User.get = function(loginCode, callback){
	mongodb.connect(settings.url, function(err, db){
		if(err){
			return callback(err);
		}
		db.collection('user', function(err, collection){
			if(err){
				db.close();
				return callback(err);
			}
			collection.findOne({
				loginCode: loginCode
			},function(err, user){
				db.close();
				if(err){
					return callback(err);
				}
				callback(null, user);
			})
		})
	})
}
