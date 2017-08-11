/**
 * Created by wuyanan on 2017/4/1.
 */
loginApp.controller("loginController",["$scope","$http","$timeout",
function($scope,$http,$timeout){
    $scope.users = {userName:"",userPwd:""};
    $scope.loginFun = function(){
        window.sessionStorage.setItem("userName",$scope.users.userName);
        window.sessionStorage.setItem("userPwd",$scope.users.userPwd);
        console.info("第三方：");
        console.info(window.sessionStorage.getItem("userName"));
        console.info(window.sessionStorage.getItem("userPwd"));
        window.location.href = "../baseFrame/base-framework.html";
    }
}]);