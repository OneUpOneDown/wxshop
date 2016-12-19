define([],function () {
    "use strict";
    var factory = function ($http,$q) {
        return {
               getuserinfo:function(){
                   var deferred = $q.defer();
                   var url = "http://sp.lianyerobot.com/index.php?s=/Home/Weixin/getuserinfo";
                   $http.jsonp(url).success(function (data){
                       var data = data;
                       deferred.resolve(data);
                   }).error(function (error){
                       console.log(error);
                       deferred.reject(error);
                   })
                   return deferred.promise;
               }
           }
    }
    factory.$inject = ['$http','$q'];
    return factory;
})
