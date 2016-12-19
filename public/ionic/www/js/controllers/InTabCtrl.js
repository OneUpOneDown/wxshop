define(['app'], function (app){
    'use strict';
    function ctrl($scope, $state,$location,openidService){
        openidService.postOpenid().then(function (data){

        },function (error){
            
        })
        $scope.intab=function(){
            $state.go('tab.tab1');
        }
        $scope.inmachine=function(){
            $state.go('machine');
        }
        
    }
    ctrl.$inject = ['$scope', '$state','$location','openidService'];
    app.registerController('InTabCtrl',ctrl);
})