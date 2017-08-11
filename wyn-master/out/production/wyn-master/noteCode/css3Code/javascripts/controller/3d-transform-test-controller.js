/**
 * Created by wuyanan on 2017/7/25.
 */
/**
 * Created by wuyanan on 2017/3/25.
 */
css3App.controller("3dTransformTestController",["$scope","$timeout",
    function($scope,$timeout){
        // 点击向左 后向右旋转
        var firstLiDeg = 0;
        $scope.turnFun = function(param){
            // 获取ul
            var ul = $("#img");
            var li = ul.children("li");
            var firstLi = li[0].style.transform;
            console.info(ul);
            console.info(ul.children("li")[0]);
            console.info(firstLi);
            var deg = 0;
            if(param == "left"){
                firstLiDeg = firstLiDeg - 40;
                for(var i = 0;i<li.length;i++){
                    if(i == 0){
                        li[i].style.transform = "rotateY("+firstLiDeg+"deg) translateZ(300px)";
                        deg = firstLiDeg;
                    }else{
                        deg = deg + 40;
                        li[i].style.transform = "rotateY("+deg+"deg) translateZ(300px)";
                    }
                }
            }else if(param == "right"){
                firstLiDeg = firstLiDeg + 40;
                deg = firstLiDeg - 40;
                for(var i = 0;i<li.length;i++){
                    deg = deg + 40;
                    li[i].style.transform = "rotateY("+deg+"deg) translateZ(300px)";
                }
            }

        };

        var timeId = "";
        var interval = 1000;
        // 循环一直转
        $scope.turnAllFun = function(param){
            $timeout.cancel(timeId);
            if(param == "left"){
                $timeout(function(){
                    $scope.turnFun(param);
                    timeId = $timeout(arguments.callee,interval);
                },interval);
            }else if(param == "right"){
                 $timeout(function(){
                    $scope.turnFun(param);
                     timeId = $timeout(arguments.callee,interval);
                },interval);
            }
        };

        // 停止
        $scope.turnStopFun = function(){
            $timeout.cancel(timeId);
        };

        var oUl = $("#img");
        var judgeScaleFlag = true;
        oUl.delegate("li","click",function(event){
            var e = event || window.event;
            var target = e.target || e.srcElement;
            console.info(e);
            console.info(target);
            if(target.nodeName.toLowerCase() == "img"){
                if(judgeScaleFlag){
                    target.style.transform = "scale(5.5)";
                    judgeScaleFlag = !judgeScaleFlag;
                }else{
                    target.style.transform = "scale(1)";
                    judgeScaleFlag = !judgeScaleFlag;
                }

                target = $(target);
                // target.css("height","200px");
                console.info(target.clientHeight);
            }

        })
    }]);