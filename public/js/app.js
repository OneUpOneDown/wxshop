// var mongodb = require('mongodb').MongoClient;
// var settings = require('../settings');

var app = angular.module('myApp',['ionic']);
app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('login',{
		url:'/login',
		templateUrl:'templates/login.html',
		controller:'myCtl'
	})
	.state('machine',{
		url:'/machine',
		templateUrl:'templates/machine.html'
	})
	$urlRouterProvider.otherwise('/login');
})
app.controller('myCtl', function($scope,$http,$state,$location){
	$scope.items=[];

	$scope.newUser={
		loginCode:"",
		passWord:""
	};
	$scope.getData=function(){
		$http.get("/menu").success(function(data, status, headers, config){
			console.log(data);
			$scope.items=data;
		})
		
	}
	$scope.subNewUser=function(){
		
		$scope.msgSucc = false;
		$scope.msgErr = false;
		console.log("hhs",$scope.newUser);
		$http({
			method  : 'POST',
			url     : "/info",
			data    : $scope.newUser,
			// headers : { 'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
		})
		.success(function(data) {
			$scope.msgSucc = true;
			$scope.success = data;
			console.log("成功",data);
			$state.go('machine');

		}).error(function(err){
			$scope.msgErr = true;
			$scope.err = err;
		});

		// $http.post("/info").success(function(data, status, headers, config){
		// 	console.log(data);
		// })
		// mongodb.connect(settings.url,function (err, db) {
		//     if (err) {
		//         return callback(err);
		//     }
		//     db.collection('newUser', function (err, collection) {
		//         if (err) {
		//             db.close();
		//             return callback(err);
		//         }
		//         collection.insert(post, {safe: true}, function (err) {
		//             db.close();
		//             if (err) {
		//                 return callback(err);
		//             }
		//             callback(null);
		//         });
		//     });
		// });
	}
});

