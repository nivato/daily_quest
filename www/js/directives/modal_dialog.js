"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.directive('modalDialog', ['$timeout', function($timeout){
        return {
            restrict: 'E',
            templateUrl: 'templates/modal_dialog.html',
            link: function(scope, element, attr){
                console.log(element);
            },
            transclude: true
        };
    }]);

})();
