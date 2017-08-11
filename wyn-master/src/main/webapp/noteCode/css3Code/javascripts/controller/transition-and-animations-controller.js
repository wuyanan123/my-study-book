/**
 * Created by wuyanan on 2017/7/25.
 */
/**
 * Created by wuyanan on 2017/3/24.
 */
css3App.controller("transitionController",["$scope",
    function($scope){
        // 初始化
        function initFun(jq,init,p,scaleZ){
            if(init == "init"){
                jq.css("transform","");
                jq.css("transition","");
                jq.css("transform-origin","");
                if(p != null && p != undefined){
                    p.css({"transform":"","transition":""});
                }
                if(scaleZ == "3dScaleZ"){
                    jq.css({"transform":"perspective(200px) rotateY(45deg)","transition":"transform 1s linear",
                        "transform-style":"preserve-3d"});
                }
            }

        };
        // 3D---移动
        $scope.translateTestFun = function(param){
            var div = $("#oneId");
            initFun(div,param);
        };
        // transition 动画实现
        $scope.transitionFun = function(){
            var div = $("#oneId");
            div.css({"transform":"rotateY(45deg) translateZ(300px)","opacity":"1","color":"red",
                "transition":"all 3s linear"});
        };

        // Animations 实现旋转木马
        $scope.animationFun = function(param){
            var div = $("#rotate");
            if(param == "start"){
                div.css({"animation":"myAnimations 10s linear 0s infinite normal"});
            }else if(param == "stop"){
                div.css({"animation":""});
            }
        };
    }]);