define(['app'], function (app){
    'use strict';
    function ctrl ($scope,$ionicPopover,$stateParams, $ionicSlideBoxDelegate){
        var vm = $scope.vm = {};
        // 弹窗
        $ionicPopover.fromTemplateUrl("ez-popover.html", {
            scope: $scope
        })
        .then(function(popover){
            $scope.popover = popover;
        })
        $scope.openPopover = function($event) {
            $scope.popover.show($event);
        };
        $scope.closePopover = function() {
            $scope.popover.hide();
        };
        //销毁事件回调处理：清理popover对象
        $scope.$on("$destroy", function() {
            $scope.popover.remove();
        });
        // 隐藏事件回调处理
        $scope.$on("popover.hidden", function() {
            // Execute action
        });
        //删除事件回调处理
        $scope.$on("popover.removed", function() {
            // Execute action
        });
    }
    ctrl.$inject = ['$scope','$ionicPopover','$stateParams', '$ionicSlideBoxDelegate'];
    app.registerController('SalesCtrl',ctrl);
})