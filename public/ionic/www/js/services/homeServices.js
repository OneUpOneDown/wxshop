define([],function () {
    "use strict";
    var factory = function ($http,$q,baseUrl) {
        function textljz(){
            return ljzh = "ljzqwer";
        }
        return {
            // //示例
            // getGameData: function(gameId) {
            //         var deferred = $q.defer();
            //         var url = "http://m?id="+gameId;
            //         url+="&callback=JSON_CALLBACK";
            //         $http.jsonp(url).success(function (data) {
            //           //业务处理
            //           deferred.resolve(data.data);
            //         }).error(function (error) {
            //           //业务处理
            //           deferred.reject(error)
            //         })
            //         return deferred.promise;
            //       }
            //     };
            //首页 大图
            getbanner:function(){
                var deferred = $q.defer();
                // var url = baseUrl + "banner/bannerInfo.action";
                var url = baseUrl + "banner"
                // url += "?callback=JSON_CALLBACK";
                $http.get(url).success(function (data){
                    var data1=[];
                    console.log(data);
                    angular.forEach(data[0],function(item,index,array){   //循环数据  data:需要遍历的集合  item:遍历时当前的数据 index遍历时当前索引 array:需要遍历的集合，每次遍历时都会把 $scope.newRole.select原样的传一次(复制一次)
                        console.log("item.img",item.imgUrl);
                        if(item.imgUrl){
                            var str = {"imgUrl":item.imgUrl};
                            data1.push(str);
                        }
                    });
                    console.log("databanner",data1);
                    deferred.resolve(data1);
                }).error(function (error){
                    console.log("error",error);
                    deferred.reject(error);
                })
                return deferred.promise;
            },
            //首页产品
            getGoodslistAll:function(){
                var deferred = $q.defer();
                var url = baseUrl + "item/storeItemList.action?condition.vmCode=&condition.label=2";
                url += "&callback=JSON_CALLBACK";
                $http.jsonp(url).success(function (data){
                    var data = data;
                    console.log("goodslistAll",data);
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
