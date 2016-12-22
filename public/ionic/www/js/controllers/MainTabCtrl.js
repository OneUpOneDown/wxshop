define(['app'],function (app){
    'use strict';
    function ctrl ($scope,$state,$stateParams,$ionicLoading,$ionicSlideBoxDelegate,$ionicScrollDelegate,$timeout, $ionicPopover,homeServices){
            
            $scope.task={title:'广州市 萝岗区 万达商城...'};
            //下拉刷新
            $scope.doRefresh = function() {
                $http.get('./data/refresh.json')   //注意改为自己本站的地址，不然会有跨域问题
                .success(function(data) {
                    $scope.tasks = data;
                })
                .finally(function() {
                    $scope.$broadcast('scroll.refreshComplete');
                });
            };
            //上拉加载更多
            $scope.loadMore = function(){

            }
        // init the popover
            $ionicPopover.fromTemplateUrl('button-options.html', {
                scope: $scope
            }).then(function (popover) {
                $scope.popover = popover;
            });

            $scope.openPopover = function ($event, type) {
                $scope.type = type;
                $scope.popover.show($event);
            };

            $scope.closePopover = function () {
                $scope.popover.hide();
                // if you are navigating away from the page once
                // an option is selcted, make sure to call
                // $scope.popover.remove();
            };
        //回到顶部
        $scope.scrollTop = function() {
            $ionicScrollDelegate.scrollTop(true);
        };
        // console.log("$ionicScrollDelegate.getScrollPosition()",$ionicScrollDelegate.getScrollPosition);
        //首页banner数据
        // $ionicLoading.show({
        //         template: "正在载入数据，请稍后..."
        //     });
        $scope.banner = [{imgUrl:"banner-01.jpg"},{imgUrl:"banner-02.jpg"},{imgUrl:"banner-03.jpg"},];
        $ionicSlideBoxDelegate.update();
        $timeout(function(){
        homeServices.getbanner().then(function (data){
            // console.log(data.banner);
            // $scope.banner = [{ "imgUrl" : "banner-01.jpg"},{ "imgUrl" : "banner-02.jpg"},{ "imgUrl" : "banner-03.jpg"}];
            // $scope.banner = data;
            // $ionicSlideBoxDelegate.update();
            $ionicLoading.hide();
        },function (error){
            $ionicLoading.hide();
            // console.log(error);
        });
        },2000);
        //首页商品数据
        homeServices.getGoodslistAll().then(function (data){
            $scope.textGoodslistAll = data;
        },function (error){
            // console.log(error);
        });
        $scope.recommend=[
    {"items":[{
        "id":0,
            "imgurl":"img/food1.png",
            "method":"售卖机自取",
            "salesNumber":12,
            "currentPrice":18,
            "originalPrice":48,
            "name":"哈哈哈哈啊啊啊啊撒啊"
        },
        {
            "id":1,
            "imgurl":"img/food2.png",
            "method":"售卖机自取",
            "salesNumber":19,
            "currentPrice":56,
            "originalPrice":87
        },
        {
            "id":2,
            "imgurl":"img/food1.png",
            "method":"售卖机自取",
            "salesNumber":21,
            "currentPrice":123,
            "originalPrice":221
        }]
    },
    {"items":[{
        "id":3,
        "imgurl":"img/food2.png",
        "method":"售卖机自取",
        "salesNumber":11,
        "currentPrice":8,
        "originalPrice":18
    },
    {
        "id":4,
        "imgurl":"img/food1.png",
        "method":"售卖机自取",
        "salesNumber":122,
        "currentPrice":92,
        "originalPrice":123
    },
    {
        "id":5,
        "imgurl":"img/food2.png",
        "method":"售卖机自取",
        "salesNumber":133,
        "currentPrice":11,
        "originalPrice":19
    }]
    }
];

$scope.textGoodslistAll=[{
        "id":3,
        "pic":"img/food2.png",
        "name":"百香米苏",
        "num":11,
        "nowprice":8,
        "price":18
    }, {
        "id":4,
        "pic":"img/food1.png",
        "name":"香脆饼干",
        "num":122,
        "nowprice":92,
        "price":123
    },{
        "id":5,
        "pic":"img/food2.png",
        "name":"售卖机自取",
        "num":133,
        "nowprice":11,
        "price":19
    }]

        $scope.inMap=function(){
            $state.go('baidumap');
        }
    } 
    ctrl.$inject = ['$scope','$state','$stateParams','$ionicLoading','$ionicSlideBoxDelegate','$ionicScrollDelegate','$timeout', '$ionicPopover','homeServices'];
    app.registerController('MainTabCtrl',ctrl);
})