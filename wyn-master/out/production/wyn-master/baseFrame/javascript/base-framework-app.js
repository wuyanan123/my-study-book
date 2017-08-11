/**
 * Created by wuyanan on 2017/4/1.
 */
var baseFrameworkApp = angular.module("baseFrameworkApp",[]);

baseFrameworkApp.factory("menuLists",function(){
    var mainMenuList = [
        {menuName:"学习笔记",subMenuList:[
            {subMenuName:"css3",url:"../noteCode/css3Code/css3-code-index.html"},
            {subMenuName:"html5",url:"../usersManager/users-edit.html"}
        ]},
        {menuName:"自定义组件",subMenuList:[
            {subMenuName:"分页指令",url:""},
            {subMenuName:"用户信息修改2",url:""}
        ]},
        {menuName:"练习实例",subMenuList:[
            {subMenuName:"第一个示例",url:"../usersManager/users-query.html"},
            {subMenuName:"第二个示例",url:"../usersManager/users-edit.html"}
        ]},
        {menuName:"菜单管理",subMenuList:[
            {subMenuName:"添加菜单",url:"../usersManager/users-query.html"},
            {subMenuName:"修改菜单",url:"../usersManager/users-edit.html"}
        ]},
        {menuName:"用户管理",subMenuList:[
            {subMenuName:"用户信息查询",url:"../usersManager/users-query.html"},
            {subMenuName:"用户信息修改",url:"../usersManager/users-edit.html"}
        ]}
    ];
    // var subMenuList = [
    //     {subMenuName:"用户信息查询"},
    //     {subMenuName:"用户信息修改"}
    // ];
    return{
        mainMenuList:mainMenuList
    };
});