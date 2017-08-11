/**
 * Created by wuyanan on 2017/7/25.
 */
/**
 * Created by wuyanan on 2017/3/24.
 */
css3App.controller("3dTransformController",["$scope",
    function($scope){
        var trans = '"transition":"all 2s"';
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
            var div = $("#translate");
            if(param == "X"){
                div.css({"transform":"perspective(200px) translateX(300px)","transition":"transform 2s linear"});
                // div.css("transition","all 1s");
            }else if(param == "Y"){
                div.css({"transform":"perspective(200px) translateY(30px)",
                    "transition":"transform 2s linear","backface-visibility":"hidden"});
                // div.css("transition","all 2s");
            } else{
                div.css("transform","perspective(200px) translateZ(70px)");
                div.css("transition","all 2s");
            }
            initFun(div,param);
        };

        // 3d -- 旋转
        $scope.rotateTestFun = function(param){
            var div = $("#rotate");
            // div.css({"left":"400px","transition":"all 3s"});
            if(param == "x"){
                div.css({"transform":"perspective(200px) rotateX(45deg)",
                    "transition":"all 2s","transform-style":"preserve-3d"});
            }else if(param == "y"){
                div.css({"transform":"perspective(200px) rotateY(50deg)",
                    "transition":"transform 2s linear","transform-style":"preserve-3d",
                    "-webkit-backface-visibility":"hidden"});
                // div.css("transition","all 2s");
            } else if(param == "z"){
                div.css({"transform": "perspective(200px) rotateZ(45deg)","transition":"all 2s",
                    "transform-style":"preserve-3d"});
                // div.css("transition","all 2s");
            }
            initFun(div,param);
        };

        // 3D--缩放
        $scope.scaleTestFun = function(param){
            var div = $("#scale");
            div.css({"left":"400px","transition":"all 3s"});
            if(param == "x"){
                div.css({"transform":"perspective(200px) scaleX(1.5)","transition":"all 2s",
                    "transform-style":"preserve-3d"});
            }else if(param == "y"){
                div.css({"transform":"perspective(200px) scaleY(0.5) ","transition":"all 2s"});
            }else if(param == "xy"){
                div.css({"transform":"perspective(200px) scaleZ(2)","transition":"all 2s"});
            }
            initFun(div,param,null,"3dScaleZ");
        };

        // 3D--倾斜
        $scope.skewTestFun = function(param){
            var div = $("#skew");
            div.css({"left":"400px","transition":"all 3s"});
            if(param == "x45"){
                div.css({"transform":"perspective(200px) skewX(45deg)","transition":"all 4s"});
            }else if(param == "x60"){
                div.css({"transform":"perspective(200px) skewX(60deg)","transition":"all 4s"});
            }else if(param == "x90"){
                div.css({"transform":"perspective(200px) skewX(90deg)","transition":"all 4s"});
            }else if(param == "y40"){
                div.css({"transform":"perspective(200px) skewY(40deg)","transition":"all 4s"});
            }else if(param == "y90"){
                div.css({"transform":"perspective(200px) skewY(90deg)","transition":"all 4s"});
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