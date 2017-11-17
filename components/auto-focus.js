(function (angular) {
    angular.module('moviecat.directives.auto-focus',[])
        .directive('autoFocus',['$location',function ($location) {
            var path = $location.path();
            return {
                restrict:'A',
                link:function ($scope, iElm, iAttrs, controller) {
                    $scope.$location = $location;
                    $scope.$watch('$location.path()',function (newVal) {
                        //档pant发生变化
                        var aLink = iElm.children().attr('href');
                        var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');
                        if(newVal.startsWith(type)){
                            iElm.parent().children().removeClass('active');
                            iElm.addClass('active');
                        }
                    });
                    /*iElm.on('click',function () {
                        iElm.parent().children().removeClass('active');
                        iElm.addClass('active');
                    });*/
                }
            };
        }]);

})(angular);