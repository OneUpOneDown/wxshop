define([],function () {
    "use strict";
    var factory = function ($http,$q,baseUrl) {
        return {
                postOpenid:function(keword){
                    var deferred = $q.defer();
                    var url = "http://192.168.31.140:8080/ly-Store/weixin/snsapiBase.action";
                    url += "&callback=JSON_CALLBACK";
                    $http.jsonp(url).success(function (data){
                        //业务处理
                        // var data=data;
                        console.log("data",data);
                        deferred.resolve(data);
                    }).error(function (error){
                        //业务处理
                        console.log("openidcuowu")
                        deferred.reject(error);
                    })
                    return deferred.promise;
                }
            }
    }
    factory.$inject = ['$http','$q','baseUrl'];
    return factory;
})