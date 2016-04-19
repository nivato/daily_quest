"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.directive('onRepeatEnd', ['$timeout', function($timeout){
        return {
            restrict: 'A',
            link: function(scope, element, attr){
                if (scope.$last === true) {
                    $timeout(function(){
                        scope.$emit(attr['onRepeatEnd']);
                    });
                }
            }
        };
    }]);

})();
