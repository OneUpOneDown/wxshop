// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
define([
    'services/services',
    'controllers/controllers'],

    function(){
        'use strict';
        
var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']);
// ionic 进入二级目录以后隐藏底部导航栏(tabs)
app.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });

            scope.$on('$ionicView.beforeLeave', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
})
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider,$controllerProvider) {
// 按需加载html
$ionicConfigProvider.templates.maxPrefetch(0);
//android手机上Tab在顶部问题
$ionicConfigProvider.platform.ios.tabs.style('standard'); 
$ionicConfigProvider.platform.ios.tabs.position('bottom');
$ionicConfigProvider.platform.android.tabs.style('standard');
$ionicConfigProvider.platform.android.tabs.position('bottom');

$ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
$ionicConfigProvider.platform.android.navBar.alignTitle('center');

$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        

$ionicConfigProvider.platform.ios.views.transition('ios'); 
$ionicConfigProvider.platform.android.views.transition('android');
// Ionic uses AngularUI Router which uses the concept of states
// Learn more here: https://github.com/angular-ui/ui-router
// Set up the various states which the app can be in.
// Each state's controller can be found in controllers.js
app.registerController = $controllerProvider.register;
app.loadControllerJs = function(controllerJs){
    return function($rootScope, $q){
        var def = $q.defer(),
            deps = [];
        angular.isArray(controllerJs) ? (deps = controllerJs) : deps.push(controllerJs);
        require(deps, function(){
            $rootScope.$apply(function (){
                def.resolve();
            });
        });
        return def.promise;
    }
}
$stateProvider
// setup an abstract state for the tabs directive
.state('login', {
    url: '/login?openid=&nonce=',
    templateUrl: 'templates/login.html',
    controller:'InTabCtrl',
    resolve:{
        deps: app.loadControllerJs('./controllers/InTabCtrl')
    }

})
.state('machine', {
    url: '/machine',
    templateUrl: 'templates/machine.html',
})
// 优惠券
.state('getdiscount',{
    url:'/getdiscount',
    templateUrl:'templates/getdiscount.html'
})
.state('mydiscount',{
    url:'/mydiscount',
    templateUrl:'templates/mydiscount.html'
})
.state('mydiscount.using',{
    url:'/using',
    views:{
        'new-using':{
            templateUrl:'templates/using.html'
        }
    }
})
.state('mydiscount.past',{
    url:'/past',
    views:{
        'new-past':{
            templateUrl:'templates/past.html'
        }
    }
})
.state('mydiscount.used',{
    url:'/used',
    views:{
        'new-used':{
            templateUrl:'templates/used.html'
        }
    }
})
// 订单支付完成详情页面
.state('orderdetail',{
    url:'/orderdetail',
    templateUrl:'templates/orderdetail.html',
})
// 商城主页
.state('tab', {
url: '/tab',
abstract: true,
templateUrl: 'templates/tabs.html',
controller:'TabCtrl',
    resolve:{
        deps: app.loadControllerJs('./controllers/TabCtrl')
    }
})

// Each tab has its own nav history stack:

.state('tab.tab1', {
url: '/tab1',
views:{
'tab-tab1':{
templateUrl: "templates/tab-tab1.html",
controller:"MainTabCtrl",
    resolve:{
        deps: app.loadControllerJs('./controllers/MainTabCtrl')
    }
}
}
})
.state('tab.baidumap', {
url: '/baidumap',
views:{
'tab-tab1':{
templateUrl: "templates/baidumap.html",
controller:"MapCtrl",
    resolve:{
        deps: app.loadControllerJs('./controllers/MapCtrl')
    }
}
}
})
.state('tab.food', {
url: '/food/:foodId',
views: {
'tab-tab1': {
templateUrl: 'templates/tab-salesdetail.html',
controller: 'FoodCtrl',
    resolve:{
        deps: app.loadControllerJs('./controllers/FoodCtrl')
    }
}
}
})
.state('tab.order', {
url: '/order',
views: {
'tab-tab1': {
templateUrl: 'templates/order.html',
controller: 'OrderCtrl',
    resolve:{
        deps: app.loadControllerJs('./controllers/OrderCtrl')
    }
}
}
})
.state('tab.salesdetail', {
url: '/salesdetail',
views: {
'tab-tab1': {
templateUrl: 'templates/tab-salesdetail.html'
}
}
})
.state('tab.sales', {
url: '/sales',
views: {
'tab-sales': {
templateUrl: 'templates/tab-sales.html',
controller:'SalesCtrl',
    resolve:{
        deps: app.loadControllerJs('./controllers/SalesCtrl')
    }
}
}
})
.state('tab.activedetails',{
    url:'/sales/activedetails',
    views:{
        'tab-sales':{
            templateUrl:'templates/activedetails.html'
        }
    }
})
.state('tab.shoping-cart', {
url: '/shoping-cart',
cache:'false', 
views: {
'tab-shoping-cart': {
templateUrl: 'templates/tab-shopping-cart.html',
controller:'ShopingCartCtrl',
    resolve:{
        deps: app.loadControllerJs('./controllers/ShopingCartCtrl')
    }
}
}
})
// 个人中心
.state('tab.personal-center', {
url: '/personal-center',
views: {
'tab-personal-center': {
templateUrl: 'templates/tab-personal-center.html',
controller:'PersonalCtrl',
    resolve:{
        deps: app.loadControllerJs('./controllers/PersonalCtrl')
    }
}
}
})
// 个人中心=>分销
.state('tab.fenxiao',{
    url:'/personal-center/fenxiao',
    views:{
        'tab-personal-center':{
            templateUrl:'templates/fenxiao.html'
        }
    }
})
.state('tab.fenxiaozx',{
    url:'/personal-center/fenxiaozx',
    views:{
        'tab-personal-center':{
            templateUrl:'templates/fenxiaozx.html'
        }
    }
})
.state('tab.money',{
    url:'/personal-center/money',
    views:{
        'tab-personal-center':{
            templateUrl:'templates/money.html'
        }
    }
})
.state('tab.tixian',{
    url:'/personal-center/tixian',
    views:{
        'tab-personal-center':{
            templateUrl:'templates/tixian.html'
        }
    }
})
// 提现新tab
.state('tixianrecord',{
    url: '/tixianrecord',
    templateUrl:'templates/tixianrecord.html'
})
.state('tixianrecord.all',{
    url:'/all',
    views:{
        'new-all':{
            templateUrl:'templates/all.html'
        }
    }
})
.state('tixianrecord.checking',{
    url:'/checking',
    views:{
        'new-checking':{
            templateUrl:'templates/checking.html'
        }
    }
})
.state('tixianrecord.checked',{
    url:'/checked',
    views:{
        'new-checked':{
            templateUrl:'templates/checked.html'
        }
    }
})
.state('tixianrecord.cancle',{
    url:'/cancle',
    views:{
        'new-cancle':{
            templateUrl:'templates/cancle.html'
        }
    }
})


.state('tab.set', {
url: '/set',
views: {
'tab-set': {
templateUrl: 'templates/tab-set.html',
controller:'SetCtrl',
    resolve:{
        deps: app.loadControllerJs('./controllers/SetCtrl')
    }
}
}
})
.state('tab.mobile', {
url: '/set/mobile',
views: {
'tab-set': {
templateUrl: 'templates/mobile.html',
}
}
})
.state('tab.password', {
url: '/set/password',
views: {
'tab-set': {
templateUrl: 'templates/password.html',
}
}
})
.state('tab.commitpasswd', {
url: '/set/password/commitpasswd',
views: {
'tab-set': {
templateUrl: 'templates/commitpasswd.html',
}
}
})
.state('tab.message',{
    url:'/set/message',
    views:{
        'tab-set':{
            templateUrl:'templates/message.html'
        }
    }
})
// 订单新tab
.state('orders',{
    url: '/orders',
    templateUrl:'templates/orders.html'
})
.state('orders.orderall',{
    url:'/orderall',
    views:{
        'new-orderall':{
            templateUrl:'templates/orderall.html'
        }
    }
})
.state('orders.paying',{
    url:'/paying',
    views:{
        'new-paying':{
            templateUrl:'templates/paying.html'
        }
    }
})
.state('orders.receiving',{
    url:'/receiving',
    views:{
        'new-receiving':{
            templateUrl:'templates/receiving.html'
        }
    }
})
.state('orders.evaluate',{
    url:'/evaluate',
    views:{
        'new-evaluate':{
            templateUrl:'templates/evaluate.html'
        }
    }
})
.state('orders.deliver',{
    url:'/deliver',
    views:{
        'new-deliver':{
            templateUrl:'templates/deliver.html'
        }
    }
})

// if none of the above states are matched, use this as the fallback
$urlRouterProvider.otherwise('/login?openid=&nonce=');

});
return app;
});