define(['app'], function (app){
    'use strict';
    function ctrl ($scope,ShopingcartServices,passDataService){
        $scope.list=[{name:'热门推荐'},
                    {name:'休闲食品'},
                    {name:'甜品饮料'},
                    {name:'美食外卖'},
                    {name:'果蔬生鲜'},
                    {name:'进口食品'},
                    {name:'家具用品'},
                    {name:'婴儿用品'},
                    {name:'医药保健'},
                    {name:'甜品饮料'},
                    {name:'甜品饮料'},
                    {name:'甜品饮料'},]
    }
    ctrl.$inject = ['$scope','ShopingcartServices','passDataService'];
    app.registerController('TabCtrl',ctrl);
})