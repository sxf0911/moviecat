(function (angular) {
    'use strict';

    //正在热映模块
    var module = angular.module('moviecat.coming_soon', ['ngRoute','moviecat.services.http'])
    //配置模块的路由
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/coming_soon/:page', {
                templateUrl: 'coming_soon/view.html',
                controller: 'ComingSoonController'
            });
        }]);

    module.controller('ComingSoonController', ['$scope','$route','$routeParams','HttpService',function($scope,$route,$routeParams,HttpService) {
        var count = 10;
        var page = parseInt($routeParams.page);
        var start = (page-1)*count;
        $scope.title = '';
        $scope.loading = true;
        $scope.subjects = [];
        $scope.message = '';
        $scope.totalCount = 0;
        $scope.totalPages = 0;
        $scope.currentPage = page;
        HttpService.jsonp(
            'http://api.douban.com/v2/movie/coming_soon',
            {start:start,count:count},
            function (res) {
                $scope.title = res.title;
                $scope.subjects = res.subjects;
                $scope.totalCount = res.total;
                //总共多少页
                $scope.totalPages = Math.ceil($scope.totalCount/count);
                $scope.loading = false;
                $scope.$apply();
            });

        //暴露一个上一页下一页行为
        $scope.go = function (page) {
            if(page>=1&&page<=$scope.totalPages){
                $route.updateParams({page:page});
            }
        };
        //jsonp地址	不支持
        /*var doubanApiAddress = 'http://api.douban.com/v2/movie/in_theaters';
		$http.jsonp(doubanApiAddress+'?callback=JSON_CALLBACK').then(function (res) {
			if(res.status == 200){
                $scope.subjects = res.data.subjects;
			}else{
				$scope.message = '获取数据错误' + res.statusText;
			}

        },function (err) {
            $scope.message = '获取数据错误';
        });*/



    }]);

})(angular)
