define(['app'],function (app){
    'use strict';
    function ctrl ($scope,machineServices){
        $scope.machineSearch=function (){
                // console.log("machinelist");
                machineServices.getmachinelistall().then(function (data){
                    $scope.machinelist=data;
                    console.log("machinelist",machinelist);
                },function (error){
                    // console.log(error);
                });
            }
            // $scope.machineSearch=function(){
                console.log("machineSearch");
            //     machine.machinelistall();
            // }
            // console.log("123");
            // 百度地图API功能
            var map = new BMap.Map("allmap");    // 创建Map实例
            map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
            map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
            map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    }
    ctrl.$inject = ['$scope','machineServices'];
    app.registerController('MapCtrl',ctrl);
})