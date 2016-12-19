define([],function () {
    "use strict";
    var factory = function () {
        var myObject=[];
        /**     
        * 定义传递数据的setter函数     
        * @param {type} xxx     
        * @returns {*}    
         * @private     
        */
        var _setter=function(data){
            myObject=data;
            console.log("myObject",myObject);
        };
        /**     
        * 定义获取数据的getter函数     
        * @param {type} xxx     
        * @returns {*}     
        * @private     
        */
        var _getter=function(){
            console.log('getterMyobj');
            return myObject;

        };
        return {
            setter:_setter,
            getter:_getter
        }
    }
    factory.$inject = [];
    return factory;
})


