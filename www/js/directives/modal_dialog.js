"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.directive('modalDialog', ['$timeout', function($timeout){
        return {
            restrict: 'E',
            templateUrl: 'templates/modal_dialog.html',
            scope: {
                title: '=',
                opened: '=',
                action: '&'
            },
            link: function(scope, element, attr){
                console.log(scope.opened);
            },
            transclude: true
        };
    }]);

})();
