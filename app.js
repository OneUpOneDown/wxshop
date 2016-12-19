var express = require('express');
var path = require('path');


var flash = require('connect-flash');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
// 日志文件
var fs = require('fs');
var accessLog = fs.createWriteStream('access.log',{flags:'a'});
var errorLog = fs.createWriteStream('error.log', {flags:'a'});

// 数据上传
var postData = require('./routes/post');
//  获取post数据
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public/ionic/www')));

// 改造下面功能
postData(app);
// app.get('/subNewUser',function(req, res, next){
// 	var menus = {
// 		name:'ljz',
// 		password:'123456'
// 	}
// 	res.status(200).send(menus);
// })
app.set('port', process.env.PORT || 3333);
app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
})