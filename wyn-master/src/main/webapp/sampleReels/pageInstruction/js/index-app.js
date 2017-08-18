/**
 * Created by wuyanan on 2017/7/15.
 */
var indexApp = angular.module("indexApp",[]);
// indexApp.config(['$interpolateProvider',function($interpolateProvider){
//     $interpolateProvider.startSymbol('{{');
//     $interpolateProvider.endSymbol('}}');
// }]);
indexApp.factory("EmailParser",['$interpolate',function($interpolate){
    // 处理解析的服务
    return {
        parse : function(text, context){
            var template = $interpolate(text);
            return template(context);
        }
    };
}]);

// 自定义过滤器
indexApp.filter("nameFilter",function(){
    return function(input){
        switch(input){
            case "jack":
                return "hello jack";
            case "tom":
                return "Tom ,hi.";
            case "rose":
                return "my wife";
            default:return "i do not know"
        }
    }
});