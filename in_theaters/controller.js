(function (angular) {
	'use strict';
	//正在热映模块
	var module = angular.module('moviecat.in_theaters', ['ngRoute'])
	//配置模块的路由
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/in_theaters', {
				templateUrl: 'in_theaters/view.html',
				controller: 'InTheatersController'
			});
		}])

	module.controller('InTheatersController', ['$scope',function($scope) {
		
	}]);

})(angular)
