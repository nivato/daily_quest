"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.directive('onRender', ['$timeout', function($timeout){
        return {
            restrict: 'A',
            link: function(scope, element, attr){
                $timeout(function(){
                    scope.$emit(attr['onRender']);
                });
            }
        };
    }]);

})();
