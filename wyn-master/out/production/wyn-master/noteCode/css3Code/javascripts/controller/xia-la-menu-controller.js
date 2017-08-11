/**
 * Created by wuyanan on 2017/7/24.
 */
css3App.factory("Data",function(){
    var navList = [
        {title:"标题1",menuList:[{menuName:"接收"},{menuName:"删除"},{menuName:"管理"}]},
        {title:"标题2",menuList:[{menuName:"接收"},{menuName:"删除"},{menuName:"管理"}]},
        {title:"标题3",menuList:[{menuName:"接收"},{menuName:"删除"},{menuName:"管理"}]},
        {title:"标题4",menuList:[{menuName:"接收"},{menuName:"删除"},{menuName:"管理"}]}
    ];

    return {
        navList:navList
    }
});
css3App.controller("xiaLaMenuController",["$scope","Data",function($scope,Data){
    $scope.navList = Data.navList;
    $scope.inputMenu = {
        menuName:""
    };
    $scope.addNavFun = function(titleName,one,two){
        var _nav = {title:"",menuList:[]};
        $scope.inputMenu.menuName = one;
        _nav.menuList.push($scope.inputMenu);
        $scope.inputMenu.menuName = two;
        _nav.menuList.push($scope.inputMenu);
        _nav.title = titleName;
        $scope.navList.push(_nav);


    };



}]);
css3App.directive("outDirective",function(){
    return{
        restrict:"E",
        replace:true,
        template:"<div ng-transclude></div>",
        transclude:true,
        controllerAs:"outDirectiveController",
        controller:["$scope",function($scope){
            this.groupDatas = [];
            this.closeOthers = function(nowScope){
                this.groupDatas.forEach(function(scope){
                    if(scope !== nowScope){
                        scope.isOpen = false;
                    }
                });
            }
        }]
    }
});
css3App.directive("innerDirective",function(){
    return {
        restrict:"E",
        replace:true,
        require:"^outDirective",
        templateUrl:"template/inner-template.html",
        scope:{
            hesd:'@'
        },
        link:function(scope,element,atrrs,outDirectiveController){
            scope.isOpen = false;
            scope.changeOpenFun = function(){
                scope.isOpen = !scope.isOpen;
                outDirectiveController.groupDatas.push(scope);
                outDirectiveController.closeOthers(scope);
            }
        },
        transclude:true
    }
});
css3App.directive("oneDirective",function(){
    return {
        restrict:'EA',
        replace:true,
        scope:{
            options:'='
        },
        templateUrl:"template/template01.html",
        transclude:true,
        link:function(scope,ele,atrr){
            console.info(scope.options);
            scope.patientInfo = scope.options;
        }
    }
});