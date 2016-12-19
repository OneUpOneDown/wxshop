define(['app'], function (app){
    'use strict';
    function ctrl ($scope,userService){
        userService.getuserinfo().then(function (data){
            $scope.personal = data;
            // console.log("personal",personal);
            Popup.notice($scope.personal, 30000, function () {
                
            });
        },function (error){
            // console.log(error);
        })
    }
    ctrl.$inject = ['$scope','userService'];
    app.registerController('PersonalCtrl',ctrl);
})