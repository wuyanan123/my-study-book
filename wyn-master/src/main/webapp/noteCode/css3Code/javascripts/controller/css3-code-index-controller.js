/**
 * Created by wuyanan on 2017/7/24.
 */
css3App.controller("css3CodeIndexController",["$scope","css3MenuFactory",
function($scope,css3MenuFactory){
    $scope.menuList = css3MenuFactory.menuList;
}]);