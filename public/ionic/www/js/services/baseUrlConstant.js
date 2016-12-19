define([],function () {
    "use strict";
    var factory = function () {
        // var httpurl = "http://192.168.31.140:8080/ly-Store/ly/"
        // var httpurl = "http://120.76.233.117/ly-Store/ly/"
        var httpurl = "http://localhost:3333/"
        return httpurl;
    }
    factory.$inject = [];
    return factory;
})
