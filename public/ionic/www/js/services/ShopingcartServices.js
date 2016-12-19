define([],function () {
    "use strict";
    var factory = function ($http,$q,baseUrl,shopCartDataService) {
        var ordersRequest = function(){
            return $http.get('./data/recommend.json')
        }
        return {
            getallorders: function (){
                var deferred = $q.defer();
                var url = baseUrl + "shopping/shoppingList.action?condition.shoppingCartType=1&condition.vmCode=";
                url += "&callback=JSON_CALLBACK";
                $http.jsonp(url).success(function (data){
                    var data = data;
                    deferred.resolve(data);
                }).error(function (error){
                    console.log(error);
                    deferred.reject(error);
                })
                return deferred.promise;
            },
            deleteorders: function (){
                var deferred = $q.defer();
                var url = baseUrl + "shopping/alterShopping.action?condition.vmCode=&condition.shoppngId=&condition.operate=2condition.userId=&condition.num="
                url += "&callback=JSON_CALLBACK";
                $http.jsonp(url).success(function (data){
                    var data = data;
                    deferred.resolve(data);
                }).error(function (error){
                    console.log(error);
                    deferred.reject(error);
                })
                return deferred.promise;
            },
            getcreateorder: function (conditionId){
                var deferred = $q.defer();
                var url = baseUrl + "shopping/createStoreOrder.action?condition.id="+conditionId+"&condition.shoppingCartType=1";
                url += "&callback=JSON_CALLBACK";
                $http.jsonp(url).success(function (data){
                    var data = data;
                    shopCartDataService.shopcartdata = angular.copy(data);
                    console.log("orderdata",data);
                    console.log("shopCartDataService.shopcartdata",shopCartDataService.shopcartdata);
                    
                    deferred.resolve(data);
                }).error(function (error){
                    console.log(error);
                    deferred.reject(error);
                })
                return deferred.promise;
            },
            getprepayid: function (conditionId){
                console.log('houshopCartDataService.shopcartdata',shopCartDataService.shopcartdata);
                var deferred = $q.defer();
                var url = baseUrl + "shopping/unifiedorder.action?condition.id="+conditionId+"&condition.shoppingCartType=1";
                url += "&callback=JSON_CALLBACK";
                $http.jsonp(url).success(function (data){
                    var data = data;
                    shopCartDataService.prepayid = angular.copy(data);
                    console.log("prepayid",data);
                    deferred.resolve(data);
                }).error(function (error){
                    console.log(error);
                    deferred.reject(error);
                })
                return deferred.promise;
            }
        }
    }
    factory.$inject = ['$http','$q','baseUrl','shopCartDataService'];
    return factory;
})