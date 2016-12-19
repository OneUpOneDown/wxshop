define(['app'],function (app){
    'use strict';
    function ctrl ($scope,$ionicPopup,$timeout,$stateParams,$ionicSlideBoxDelegate,Popup,salesDetailServices,joincartServices){
        salesDetailServices.getSalesDetail($stateParams.foodId).then(function (data){
            $scope.salesDetailItem = data[0];
            // console.log('dataitemsalesDetailItem',$scope.salesDetailItem);
        }, function (error){
            Popup.notice('网络错误', 3000, function () {
                // console.log('error!');
            });
        })
        // console.log('waidataitemsalesDetailItem',$scope.salesDetailItem);
        // $scope.dataitem = {};
        // // $scope.dataitem.id = $scope.salesDetailItem.id;
        // $scope.dataitem.operate = $scope.salesDetailItem.operate;
        // $scope.dataitem.userId = $scope.salesDetailItem.userId;
        // $scope.dataitem.num = $scope.salesDetailItem.num;
        $scope.item = {goodsNum:1};
        $scope.minus = function($index) {
            if ($scope.item.goodsNum == 1) {
                return;
            } else {
                $scope.item.goodsNum--;
            }
        }
        // ++++
        $scope.add = function($index) {
            $scope.item.goodsNum++;
        }

        $scope.showAlert = function() {
            // console.log("coainam")
            joincartServices.joincartbase($stateParams.foodId,$scope.item.goodsNum ).then(function (data){
                Popup.notice('加入购物车成功', 3000, function () {
                    // console.log('ok!');
                });
            },function (error){
                Popup.notice('网络错误', 3000, function () {
                    // console.log('error!');
                });
            })
           
        };
        var goodsItem=[];
    }
    ctrl.$inject = ['$scope','$ionicPopup','$timeout','$stateParams','$ionicSlideBoxDelegate','Popup','salesDetailServices','joincartServices'];
    app.registerController('FoodCtrl',ctrl);
})