/**
 * Created by wuyanan on 2017/4/12.
 */
usersApp.controller("usersEditController",["$scope","$http",
function($scope,$http){
    $scope.openModal = false;
    $scope.zTreeDataShow = [
        {code:'0101',codeName:"冯家烧烤",upCode:'01'},
        {code:'0102',codeName:"风刀霜剑",upCode:'01'},
        {code:'0103',codeName:"电话费",upCode:'01'},
        {code:'0201',codeName:"大黄蜂",upCode:'02'},
        {code:'020101',codeName:"大黄蜂-圣诞节",upCode:'0201'},
        {code:'020102',codeName:"大黄蜂-多喝点",upCode:'0201'},
        {code:'0202',codeName:"大房间",upCode:'02'},
        {code:'0203',codeName:"第三方回家",upCode:'02'},
        {code:'01',codeName:"模块1",upCode:''},
        {code:'02',codeName:"模块2",upCode:''}
    ];
    // ztree配置
    var setting ={
        view:{
            dblClickExpand:true,
            showLine:true,
            multiSelect:false,
            showIcon:false
        },
        data:{
            key:{
                name:"codeName"
            },
            simpleData:{
                enable:true,
                idKey:"code",
                pIdKey:"upCode"
            }
        },
        callback:{
            onClick:zTreeOnClick
        }
    };
    function zTreeOnClick(event, treeId, treeNode) {
        console.info(event);
        console.info(treeId);
        console.info(treeNode);
        $scope.complainTree = treeNode;
    };
    var zTreeData = null;
    // 初始化分类树
    function initTree(){
        zTreeData = $.fn.zTree.init($("#treeDemo"),setting,$scope.zTreeDataShow);
    }
    initTree();
    
    // modal配置
    $scope.openModalOpts = {
        dialogClass:"modal edit-modal"
    };
    $scope.openModalFun = function(){
        $scope.openModal = true;
    };
    $scope.closeModalFun = function(){
        $scope.openModal = false;
    };

//    ng-grid 配置

    //ngGrid
    $scope.pagingOptions = {
        pageSizes: [5, 10, 15],
        pageSize: 5,
        totalServerItems: "0",
        currentPage: 1
    };

    $scope.GridData = [
        {staffId: "101", staffName: "小才", sex: "男", position: "经理", birthday: "1988-08-08", regTime: new Date()},
        {staffId: "102", staffName: "小张", sex: "男", position: "主管", birthday: "1989-09-09", regTime: 1372646606000},
        {staffId: "103", staffName: "小李", sex: "女", position: "职员", birthday: "1988-08-08", regTime: "2013-09-09 09:09:09"},
        {staffId: "104", staffName: "小王", sex: "女", position: "职员", birthday: "1988-08-08", regTime: "2013-09-09 09:09:09"},
        {staffId: "105", staffName: "小赵", sex: "女", position: "职员", birthday: "1988-08-08", regTime: "2013-09-09 09:09:09"},
        {staffId: "106", staffName: "小孙", sex: "女", position: "职员", birthday: "1988-08-08", regTime: "2013-09-09 09:09:09"},
        {staffId: "107", staffName: "小孙", sex: "女", position: "职员", birthday: "1988-08-08", regTime: "2013-09-09 09:09:09"}
    ];

    $scope.oneGridData = [];

    $scope.$watch("pagingOptions", function(newValue) {
        var page = newValue.currentPage;
        var pageSize = newValue.pageSize;
        $scope.oneGridData = $scope.GridData.slice((page - 1) * pageSize, page * pageSize);
        $scope.pagingOptions.totalServerItems = $scope.GridData.length + "";
    }, true);

    $scope.gridOneOpts = {
        data: "oneGridData",//数据源
        enablePaging: true,//是否允许分页按钮
        showFooter: true,//是否显示底部工具栏
        pagingOptions: $scope.pagingOptions,//分页参数
        i18n: 'zh-cn',//国际化
        columnDefs: [
            {field: 'staffId', displayName: '员工ID'},
            {field: 'staffName', displayName: '员工姓名'},
            {field: 'sex', displayName: '性别'},
            {field: 'position', displayName: '职位'},
            {field: 'birthday', displayName: '生日'},
            {field: 'regTime', displayName: '注册时间'}
        ]
    };


    // $scope.gridOptions = {
    //     data: "zTreeDataShow",//数据源
    //     enablePaging: true,//是否允许分页按钮
    //     showFooter: true,//是否显示底部工具栏
    //     pagingOptions: $scope.pagingOptions,//分页参数
    //     i18n: 'zh-cn',//国际化
    //     columnDefs: [
    //         {field: 'codeId', displayName: '编码'},
    //         {field: 'codeName', displayName: '名字'},
    //         {field: 'upCode', displayName: '上一级编码'}
    //         // {field: 'position', displayName: '职位'},
    //         // {field: 'birthday', displayName: '生日'},
    //         // {field: 'regTime', displayName: '注册时间'}
    //     ]
    // }
}]);