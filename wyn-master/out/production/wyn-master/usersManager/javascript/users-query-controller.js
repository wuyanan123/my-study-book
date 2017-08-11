/**
 * Created by wuyanan on 2017/4/10.
 */
usersApp.controller("usersQueryController",["$scope","$http",
    function($scope,$http){
        $scope.dataList = [
            {name:"张三",sex:"男",age:45,call:"13223432",height:"179cm"},
            {name:"李四",sex:"女",age:45,call:"13223432",height:"179cm"},
            {name:"王二",sex:"男",age:45,call:"13223432",height:"179cm"},
            {name:"jack",sex:"男",age:45,call:"13223432",height:"179cm"},
            {name:"jack",sex:"男",age:45,call:"13223432",height:"179cm"},
            {name:"jack",sex:"男",age:45,call:"13223432",height:"179cm"},
            {name:"jack",sex:"男",age:45,call:"13223432",height:"179cm"}
        ]
}]);