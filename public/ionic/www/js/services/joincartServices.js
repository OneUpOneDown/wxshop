define([],function () {
    "use strict";
    var factory = function ($http,$q,baseUrl) {
        return {
                joincartbase: function (conditionId,conditionBuynum){
                    var deferred = $q.defer();
                    var url = baseUrl + "shopping/alterShopping.action?condition.vmCode=&condition.itemId="+conditionId+"&condition.operate=1&condition.buyNum="+conditionBuynum+"&condition.shoppingCartType=1";
                    url += "&callback=JSON_CALLBACK";
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
    factory.$inject = ['$http','$q','baseUrl'];
    return factory;
})
