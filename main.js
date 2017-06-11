

var myApp=angular.module('myApp',[]);

myApp.controller("mainController", function($scope,$http) {
    $scope.userData={
        username:'',
        password:''
    };
    $scope.toggle = function (userData) {
        $http({
            method:'post',
            url:"/carrots-admin-ajax/a/login",
            params: {name: userData.username, pwd: userData.password}}).success(function (data) {
              $(".tip-3").html(data.message);   //data.messag为服务器接口返回信息
            if(data.message=="success"){location.href="./js-round6.html"};

            console.log(data.message);
            console.log(data);
            console.log(userData.username);
        });
    }


});

