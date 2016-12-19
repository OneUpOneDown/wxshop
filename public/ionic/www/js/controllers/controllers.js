// 原始文件 angular.module('starter.controllers', [])
// 修改后如下
define(function (require){
    'use strict';
    var services = require('services/services');
    var controllers = angular.module('starter.controllers', ['angular-popups']);
    controllers.config(function (PopupProvider) {
            PopupProvider.title = '提示';
            PopupProvider.okValue = '确定';
            PopupProvider.cancelValue = '取消';
        });
    // controllers.controller('controller名字',require('对应文件地址'))
    // controllers.controller('InTabCtrl',require('controllers/InTabCtrl'));
    // controllers.controller('TabCtrl',require('controllers/TabCtrl'));
    // controllers.controller('MainTabCtrl',require('controllers/MainTabCtrl'));
    // controllers.controller('SalesCtrl',require('controllers/SalesCtrl'));
    // controllers.controller('MapCtrl',require('controllers/MapCtrl'));
    // controllers.controller('FoodCtrl',require('controllers/FoodCtrl'));
    // controllers.controller('ShopingCartCtrl',require('controllers/ShopingCartCtrl'));
    // controllers.controller('SetCtrl',require('controllers/SetCtrl'));
    // controllers.controller('OrderCtrl',require('controllers/OrderCtrl'));
    // controllers.controller('PersonalCtrl',require('controllers/PersonalCtrl'));
    
    return controllers;
})

