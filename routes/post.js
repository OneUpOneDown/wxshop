var mongodb = require('mongodb').MongoClient;
var settings = require('../dbSettings');
var User = require('../models/user.js');

var msg={succ:"注册成功",err:"注册失败",alHave:"用户名已存在",dberr:"链接数据库失败"};
module.exports = function(app){
	// 首页轮播大图
	app.get('/banner',function(req,res){
		console.log("banner");
		mongodb.connect(settings.url, function(err, db){
			if(err){
				return callback(err);
			}
			db.collection('banner', function(err, collection){
				if(err){
					db.close();
				 	return res.status(300).send(msg.dberr);;
				}
				// collection.find(function(err, user){
				// 	db.close();
				// 	if(err){
				// 		return callback(err);
				// 	}
				// 	res.status(200).send(msg.succ);
				// })
				collection.find().toArray(function(err, result) {
					   if(err)
					   {
					     console.log('Error:'+ err);
					     return;
					   }    
					   res.status(200).send(result);
					 });

			})
		})
	})
	app.get('/menu',function(req, res, next){
		var menus = [{
			name:'用户管理',
		},
		{
			name:'机器管理',
		},
		{
			name:'用户注册',
		}
		]
		res.status(200).send(menus);
	});
	app.post('/info',function(req,res,next){
		// console.log("req",req);
		var loginCode = req.body.loginCode,
			passWord = req.body.passWord;


		var date = new Date();
		var time = {
		    date: date,
		    year : date.getFullYear(),
		    month : date.getFullYear() + "-" + (date.getMonth() + 1),
		    day : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
		    minute : date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + 
		    date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) 
		}

		var newUser = new User({
			loginCode:loginCode,
			passWord:passWord,
			time: time
		})

		User.get(newUser.loginCode, function(err, user){
			if(err){

			}
			if(user){
				return res.status(300).send(msg.alHave);
			}
			newUser.save(function(err, user){
				if(err){

				}
				res.status(200).send(msg.succ);
			})
		})
		console.log(req.body);

		// mongodb.connect(settings.url, function(err,db){
		// 	if(err){
		// 		console.log("链接失败");
		// 	}
		// 	db.collection('user', function(err, collection){
		// 		if(err){
		// 			db.close();
		// 			console.log("进入集合失败");
		// 		}
		// 		collection.insert(req.body,{safe: true}, function(err){
		// 			db.close();
		// 			if(err){
		// 				console.log("插入数据失败");
		// 			}else{
		// 				res.status(200).send(msg.succ);
		// 			}
		// 		})
		// 	})
		// })
	})
}