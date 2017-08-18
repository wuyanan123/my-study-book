/**
 * Created by wuyanan on 2017/7/15.
 */
indexApp.controller("indexController",["$scope","$http","$timeout","$interpolate",
    function($scope,$http,$timeout,$interpolate){
        $scope.productList = [
            {code:"001",name:"土豆",price:2.0,total:4},
            {code:"002",name:"马铃薯",price:2.5,total:2},
            {code:"003",name:"小麦",price:4.0,total:10},
            {code:"004",name:"玉米",price:7.0,total:6},
            {code:"005",name:"大米",price:234,total:3},
            {code:"006",name:"苹果",price:6453,total:12},
            {code:"007",name:"小辣椒",price:2313,total:54}
        ];
        $scope.productListCopy = angular.copy($scope.productList);
        $scope.pageConfig = {
            total:$scope.productList.length,   //总数据条数
            pageList:[5,10,15,20]  // 每页显示页数数组
        };
        // type:页数改变操作类型(下一页，上一页，或点击某一页)
        $scope.changePageFun = function(type,pageParam){
            var _productListCopy = angular.copy($scope.productListCopy);
            var _startIndex = (pageParam.currentPage-1) * pageParam.pageSize;
            var _endIndex = (pageParam.currentPage) * pageParam.pageSize;
            $scope.productList = _productListCopy.slice(_startIndex,_endIndex);
        };

}]);
indexApp.directive("wynPage",function(){
    return{
        restrict:"EA",
        replace:false,
        templateUrl:"template/page-template.html",
        scope:{
            options:"=options",
            onPageChanged:"&onpagechanged"
        },
        link:function(scope,element,attrs){
            // 设置默认的总数也每页显示数
            var opts = {
                total:0,
                pageList:[3,6,9],
                pageSize:0,   // 每一页显示的数据数目
                pageTotal:0,   // 根据数据总数算出的页数
                currentPage:0,  // 当前所在页
                pageNumList:[]  // 页数数组
            };
            // initPage();
            // 初始化分页
            (function initPage(){
                if(scope.options && !scope.options.pageList && !scope.options.pageList){
                    scope.options.pageList = opts.pageList;
                }
                angular.extend(opts, scope.options);
                opts.pageSize = opts.pageList[0];
                scope.options = opts;
                refreshPagination(opts.pageSize);
                onPageChanged();
            })();
            // 计算分页页数 pageTotal
            function refreshPagination(pageSize){
                if(parseInt(scope.options.total)%parseInt(pageSize) == 0){
                    scope.options.pageTotal = parseInt(scope.options.total)/parseInt(pageSize);
                }else{
                    scope.options.pageTotal = parseInt(parseInt(scope.options.total)/parseInt(pageSize)+1);
                }
                if(scope.options.pageTotal <= 0){
                    scope.options.currentPage = 0;
                }else{
                    scope.options.pageNumList = [];
                    scope.options.currentPage = 1;
                    for(var i = 1;i <= scope.options.pageTotal;i++){
                        scope.options.pageNumList.push(i);
                    }
                }
            };

            // 下一页
            function nextPage(){
                if(scope.options.currentPage < scope.options.pageTotal){
                    scope.options.currentPage++;
                }else{
                    scope.options.currentPage = scope.options.pageTotal;
                }
            };
            // 上一页previous page
            function previousPage(){
                scope.options.currentPage--;
                if(scope.options.currentPage <= 0){
                    scope.options.currentPage = 1;
                }
            };
            // 首页
            function firstPage(){
                scope.options.currentPage = 1;
            };
            // 最后一页
            function lastPage(){
                scope.options.currentPage = scope.options.pageTotal;
            };

            // 点击某一页
            function selectedPage(pageNum){
                scope.options.currentPage = parseInt(pageNum);
            };

            scope.changedPageFun = function(type){
                switch(type){
                    case "firstPage":
                        firstPage();
                        break;
                    case "lastPage":
                        lastPage();
                        break;
                    case "nexPage":
                        nextPage();
                        break;
                    case "previousPage":
                        previousPage();
                        break;
                    default:selectedPage(type);
                }
                onPageChanged(type);
            };

            //分页操作
            function onPageChanged(type) {
                var pageParam = {
                    currentPage: scope.options.currentPage,
                    pageSize: scope.options.pageSize,
                    pageTotal: scope.options.pageTotal,
                    total: scope.options.total
                };
                scope.onPageChanged()(type, pageParam);
            };

            // 改变每页显示数目
            scope.selectedPageFun = function(pageSize){
                refreshPagination(pageSize);
                onPageChanged();
            };

        }
    }
});
