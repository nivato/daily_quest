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
                submitAction: '&',
                closeAction: '&'
            },
            link: function(scope, element, attr){
                // Do nothing yet
            },
            controller: ['$scope', '$element', '$attrs', '$transclude', '$timeout', function($scope, $element, $attrs, $transclude, $timeout){
                this.executeAction = function(){
                    $scope.submitAction();
                    this.close();
                };
                this.close = function(){
                    $element.find('.modal.fade').removeClass('in');
                    $scope.closeAction();
                    $timeout(function(){
                        $scope.opened = false;
                    }, 400);
                };
            }],
            controllerAs: 'modal',
            transclude: true
        };
    }]);

})();
