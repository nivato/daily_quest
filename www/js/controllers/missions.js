"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.controller('MissionsController', ['$scope', '$location', function($scope, $location){
        var ctrl = this;
        this.tabs = [
            {id: 'daily', label: 'Daily', content: 'Some Daily content'},
            {id: 'weekly', label: 'Weekly', content: 'Some Weekly content'},
            {id: 'monthly', label: 'Monthly', content: 'Some Monthly content'}
        ];
        this.activeTab = this.tabs[0];
        this.tabs[0].items = [];
        for (var i=0; i<100; i++){
            this.tabs[0].items.push('Some Daily Mission ' + i);
        }

        this.enableScroll = function(){
            var scrolling = false;
            $('.scroll-container').mousewheel(function(eve){
                if (!scrolling){
                    $(eve.currentTarget).animate(
                        {top: '+=' + (37 * eve.deltaY) + 'px'},
                        {
                            duration: 100,
                            start: function(){scrolling = true;},
                            complete: function(){scrolling = false;}
                    });
                }
            });
        };

        $scope.$on('listRendered', function(eve){
            ctrl.enableScroll();
        });

    }]);

})();
