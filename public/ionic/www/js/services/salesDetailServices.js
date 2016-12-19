define([],function () {
    "use strict";
    var factory = function ($http,$q,baseUrl) {
        return {
                getSalesDetail: function(conditionId){
                    var deferred = $q.defer();
                    var url = baseUrl + "item/storeItemInfo.action?condition.vmCode=&condition.id="+conditionId;
                    url += "&callback=JSON_CALLBACK";
                    $http.jsonp(url).success(function (data){
                        var data = data;
                        console.log("datasalesdetail",data);
                        deferred.resolve(data);
                    }).error(function (error){
                        deferred.reject(error);
                    })
                    return deferred.promise;
                }
            }
    }
    factory.$inject = ['$http','$q','baseUrl'];
    return factory;
})
