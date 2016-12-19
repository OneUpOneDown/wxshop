define([],function () {
    "use strict";
    var factory = function ($http,$q,baseUrl) {
        return {
                getmachinelistall:function(){
                    console.log("limian")
                    var deferred = $q.defer();
                    var url = baseUrl + "store/vending/findName.action?condition.name=加速器&condition.lon=115.478284&condition.lat=24.119538";
                    url += "&callback=JSON_CALLBACK";
                    $http.jsonp(url).success(function (data){
                        //业务处理
                        var data=data;
                        console.log("data",data);
                        deferred.resolve(data);
                    }).error(function (error){
                        //业务处理
                        console.log("cuowu")
                        deferred.reject(error);
                    })
                    return deferred.promise;
                }
            }
    }
    factory.$inject = ['$http','$q','baseUrl'];
    return factory;
})
