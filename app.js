

/*angular.module('ngRouteExample',['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/',{templateUrl: 'Welcome.html'})
            .when('/article',{templateUrl: 'article.html',controller: 'siteCtrl'})
            .when('/new_article',{templateUrl: 'new_article.html'})
            .otherwise({redirectTo:'/'})
    }]);*/
/*angular.module("ngRouteExample", [])*/




angular.module("ngRouteExample", ["ui.router"])
    .config(
        function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.when("", "/Welcome");
            $stateProvider
            //.state("状态",{url : "URL路径", templateUrl : "html"})
                .state("Welcome",{url : "/Welcome", templateUrl : "Welcome.html"})
                .state("article",{url : "/article", templateUrl : "article.html",controller:"siteCtrl"})
                .state("new2", {url : "/new2", templateUrl : "new_article.html"})
        }
    )
    .controller('siteCtrl', function($scope, $http) {
        $http.get("/carrots-admin-ajax/a/article/search")
            .success(function (response) {$scope.list = response.data.articleList;});
})


    .filter("changeType",function () {
        return function (type){
            var listType="";
            switch (type){
                case 0:listType="首页banner";break;
                case 1:listType="找职位banner";break;
                case 2:listType="找精英banner";break;
                case 3:listType="行业大图";break;
            }
            return listType;
        }
    })
    .filter("changeStatus",function(){
        return function (status){
            var listStatus="";
            switch (status){
                case 2:listStatus="上线";break;
                case 1:listStatus="草稿";break;
            }
            return listStatus;
        }
    })
