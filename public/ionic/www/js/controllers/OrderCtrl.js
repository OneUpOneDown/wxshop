define(['app'], function (app){
    'use strict';
    function ctrl ($scope,$rootScope,ShopingcartServices,shopCartDataService){
        // console.log("shopCartDataService.shopcartdata", shopCartDataService.shopcartdata);
        $scope.wxpay = function (){
            // console.log("scao",shopCartDataService.shopcartdata);
            var promise = ShopingcartServices.getprepayid($rootScope.all_tmpData[0].id)
            promise.then(function (data){
                // $scope.unifiedorder={}
                // https://api.mch.weixin.qq.com/pay/unifiedorder
                $scope.tmpData = data[0];                
                function onBridgeReady(){
                   WeixinJSBridge.invoke(
                       'getBrandWCPayRequest', {
                           "appId" : $scope.tmpData.appid,     //公众号名称，由商户传入     
                           "timeStamp" : $scope.tmpData.timeStamp,         //时间戳，自1970年以来的秒数     
                           "nonceStr" : $scope.tmpData.nonce_str, //随机串     
                           "package" : $scope.tmpData.packageValue,   
                           "signType" : "MD5",         //微信签名方式:     
                           "paySign" : $scope.tmpData.sign //微信签名 
                       },
                       function(res){     
                           if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                                alert('wxgetOk');
                                // console.log("getOk")
                           }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
                       }
                   ); 
                }
                if (typeof WeixinJSBridge == "undefined"){
                   if( document.addEventListener ){
                       document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                       // alert("01");
                   }else if (document.attachEvent){
                       document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
                       document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                       // alert("02");
                   }
                }else{
                    // alert($scope.tmpData.appid);
                    // alert($scope.tmpData.timeStamp);
                    // alert($scope.tmpData.nonce_str);
                    // alert($scope.tmpData.prepay_id);
                    // alert($scope.tmpData.sign);
                   onBridgeReady();
                } 
            },function (error){

            })
            console.log("wxpay");
            
        }
    }
    ctrl.$inject = ['$scope','$rootScope','ShopingcartServices','shopCartDataService'];
    app.registerController('OrderCtrl',ctrl);
})