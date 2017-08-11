/**
 * Created by wuyanan on 2017/7/24.
 */
/**
 * Created by wuyanan on 2017/3/24.
 */
css3App.controller("transformController",["$scope",
    function($scope){
        var trans = '"transition":"all 2s"';
        // 初始化
        function initFun(jq,init,p){
            if(init == "init"){
                jq.css("transform","");
                jq.css("transition","");
                jq.css("transform-origin","");
                if(p !== null){
                    p.css({"transform":"","transition":""});
                }
            }

        };
        // 移动
        $scope.translateTestFun = function(param){
            var div = $("#translate");
            if(param == "X"){
                div.css("transform","translateX(300px)");
                div.css("transition","all 1s");
            }else if(param == "Y"){
                div.css("transform","translateY(30px)");
                div.css("transition","all 2s");
            } else{
                div.css("transform","translate(400px,30px)");
                div.css("transition","all 2s");
            }
            initFun(div,param);
        };

        // 旋转
        $scope.rotateTestFun = function(param){
            var div = $("#rotate");
            if(param == "45"){
                div.css("transform","rotate(45deg)");
                div.css("transition","all 1s");
            }else if(param == "90"){
                div.css("transform","rotate(90deg)");
                div.css("transition","all 2s");
            } else if(param == "220"){
                div.css("transform","rotate(220deg)");
                div.css("transition","all 2s");
            }
            initFun(div,param);
        };

        // 缩放
        $scope.scaleTestFun = function(param){
            var div = $("#scale");
            div.css({"left":"400px","transition":"all 3s"});
            if(param == "x"){
                div.css({"transform":"scaleX(1.5)","transition":"all 2s"});
            }else if(param == "y"){
                div.css({"transform":"scaleY(0.5)","transition":"all 2s"});
            }else if(param == "xy"){
                div.css({"transform":"scale(1.5,0.5)","transition":"all 2s"});
            }
            initFun(div,param);
        };

        // 倾斜
        $scope.skewTestFun = function(param){
            var div = $("#skew");
            div.css({"left":"400px","transition":"all 3s"});
            if(param == "x30"){
                div.css({"transform":"skew(30deg,0deg)","transition":"all 4s"});
            }else if(param == "x90"){
                div.css({"transform":"skew(90deg)","transition":"all 4s"});
            }else if(param == "y10"){
                div.css({"transform":"skew(0deg,10deg)","transition":"all 4s"});
            }else if(param == "y90"){
                div.css({"transform":"skewY(0deg,90deg)","transition":"all 4s"});
            }else if(param == "xy"){
                div.css({"transform":"skew(30deg,10deg)","transition":"all 2s"});
            }else if(param == "x90y90"){
                div.css({"transform":"skew(90deg,90deg)","transition":"all 2s"});
            }
            initFun(div,param);
        };

        // 指定基点 以及 同时使用多种变形
        $scope.transformTestFun = function(param){
            var div = $("#origin");
            var p = $("#content");
            // div.css({"transform-origin":"400px"});
            if(param == "center"){
                // 移动加旋转
                div.css({"transform":"translate(500px) rotate(360deg)",
                    "transition":"all 3s","transition-delay":"1s"});
                p.css({"transform":"rotateY(360deg) translate(60px,40px) scale(1.5,1.5)","transition":"all 6s"});
            }else if(param == "leftTop"){
                // 设置基点为左上
                div.css("transform-origin","left top");
                div.css({"transform":"translate(500px) rotate(360deg)",
                    "transition":"all 3s","transition-delay":"1s"});
                p.css({"transform":"rotateY(360deg) translate(60px,40px) scale(1.5,1.5)","transition":"all 6s"});
            }else if(param == "xy"){
                // 设置基点为（50px,30px）
                div.css("transform-origin","50px 30px");
                div.css({"transform":"translate(500px) rotate(360deg)",
                    "transition":"all 3s","transition-delay":"1s"});
                p.css({"transform":"rotateY(360deg) translate(60px,40px) scale(1.5,1.5)","transition":"all 6s"});
            }else if(param == "bottomCenter"){
                // 设置基点为下中
                div.css("transform-origin","bottom center");
                div.css({"transform":"translate(500px) rotate(360deg)",
                    "transition":"all 3s","transition-delay":"1s"});
                p.css({"transform":"rotateY(360deg) translate(60px,40px) scale(1.5,1.5)","transition":"all 6s"});
            }
            initFun(div,param,p);
        };
    }]);