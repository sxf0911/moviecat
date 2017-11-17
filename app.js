(function (angular) {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('moviecat', [
        'ngRoute',
        /*'moviecat.in_theaters',
        'moviecat.coming_soon',
        'moviecat.top250'*/
        'moviecat.movie_detail',
        'moviecat.movie_list',
        'moviecat.directives.auto-focus',
    ])
        .constant('AppConfig',{
            pageSize:10,
            listApiAddress:'http://api.douban.com/v2/movie/',
            detailApiAddress:'http://api.douban.com/v2/movie/subject/',
        })
     .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
    }]).controller('SearchController',['$scope','$route','AppConfig',function ($scope,$route,AppConfig) {
        $scope.input='';
        $scope.search = function () {
            $route.updateParams({categroy:'search',q:$scope.input});
        };
    }])/*.controller('NavController',['$scope','$location',function ($scope,$location) {
        $scope.$location = $location;
        $scope.$watch('$location.path()',function (newVal, oldVal) {
            if(newVal.startsWith('/top250')){
                $scope.type = 'top250';
            }else if(newVal.startsWith('/in_theaters')){
                $scope.type = 'in_theaters';
            }else if(newVal.startsWith('/coming_soon')){
                $scope.type = 'coming_soon';
            }

        });
    }])*/;

})(angular);
