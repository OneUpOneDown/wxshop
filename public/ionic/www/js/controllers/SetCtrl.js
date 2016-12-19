define(['app'], function (app){
    'use strict';
    function ctrl ($scope,Popup){
        $scope.connect = function(){
            Popup.confirm('客服电话：4001-0000-000', function () {
                
            }, function () {
                
            });
        }
    }
    ctrl.$inject = ['$scope','Popup'];
    app.registerController('SetCtrl',ctrl);
})