/**
 * Created by wuyanan on 2017/4/1.
 */
baseFrameworkApp.controller("baseFrameworkController",["$scope","$http","$timeout","menuLists",
function($scope,$http,$timeout,menuLists){
    $scope.users = {
        userName:window.sessionStorage.getItem("userName"),
        userPwd:window.sessionStorage.getItem("userPwd")
    };

    // 菜单数组
    $scope.menuLists = menuLists.mainMenuList;
    console.info($scope.menuLists);
    // 显示的框架信息数组
    $scope.allFrames = [
        {
            frameId:"",
            frameName:"主界面",
            frameUrl:"base-main.html"
        }
    ];
    // 当前点击选中的frame页面(默认main页面)
    $scope.currentFrame = $scope.allFrames[0];
    $scope.intoMenuHtml = function(subMenu){
        $scope.currentFrame = {
            frameId:"",
            frameName:subMenu.subMenuName,
            frameUrl:subMenu.url
        };
        var j = 0;
        var had = true;
        $scope.allFrames.forEach(function(frame,index){
            if(frame.frameName == subMenu.menuName){
                j = index;
                had = false;
            }
        });
        if(had){
            $scope.allFrames.push($scope.currentFrame);
        }else{
            $scope.allFrames.splice(j,1,$scope.currentFrame);
        }
    };

    // 设置frame显示的空间高度
    $scope.framesSpaceHeight = function(){
        var height = $(window).height()- $('#baseFrameworkheader').height();
        return {height:height +'px'};
    };
    
    // 设置frame是否显示样式
    $scope.frameStyle = function(frame){
        if($scope.allFrames.length == 1 || $scope.currentFrame.frameName == frame.frameName){
            return {display:'block'};
        }else{
            return {display:'none'};
        }
    };
}]);