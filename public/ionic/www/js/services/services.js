define(function (require) {
  'use strict';
  var services = angular.module('starter.services',[]);
    //services.factory('服务名',require('对应的文件地址'));
    services.factory('baseUrl',require('services/baseUrlConstant'))
    services.factory('homeServices',require('services/homeServices'));
    services.factory('salesDetailServices',require('services/salesDetailServices'));
    services.factory('machineServices',require('services/machineServices'));
    services.factory('joincartServices',require('services/joincartServices'));
    services.factory('shopCartDataService',require('services/shopCartDataService'));
    services.factory('ShopingcartServices',require('services/ShopingcartServices'));
    services.factory('userService',require('services/userService'));
    services.factory('passDataService',require('services/PassDataService'))
    services.factory('openidService',require('services/OpenidService'))

  return services;
});
