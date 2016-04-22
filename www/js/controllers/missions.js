"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.controller('MissionsController', ['$scope', '$timeout', '$location', function($scope, $location, $timeout){
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
            var itemHeight = 38;
            var missedScrolls = 1;
            var timestamp = new Date().getTime();
            $('.scroll-container').mousewheel(function(event){
                if (!scrolling){
                    if (new Date().getTime() - timestamp > 500){
                        missedScrolls = 1;
                    }
                    var container = $(event.currentTarget);
                    var list = container.parent();
                    var moveDistance = itemHeight * missedScrolls * event.deltaY;

                    var listOffset = list.offset();
                    var listHeight = list.outerHeight();

                    var containerOffset = container.offset();
                    var containerHeight = container.outerHeight();

                    if (containerOffset.top + moveDistance > listOffset.top + 1){
                        moveDistance = listOffset.top - containerOffset.top + 1;
                    } else if (containerOffset.top + containerHeight + moveDistance < listOffset.top + listHeight - 1){
                        moveDistance = (listOffset.top + listHeight - 1) - (containerOffset.top + containerHeight);
                    }

                    container.animate(
                        {top: '+=' + moveDistance + 'px'},
                        {
                            duration: 200,
                            start: function(){scrolling = true;},
                            complete: function(){scrolling = false;}
                    });
                    missedScrolls = 1;
                    timestamp = new Date().getTime();
                } else {
                    missedScrolls += 1;
                }
            });

            var previousY;
            $('.scroll-container').swipe({
                swipeStatus: function(event, phase, direction, distance, duration, fingerCount){
                    if (previousY){
                        if (Math.abs(event.y - previousY) < itemHeight / 4){
                            return;
                        }
                        direction = (event.y - previousY > 0)? 'down': 'up';
                    } else if (direction != 'up' && direction != 'down'){
                        return;
                    }
                    previousY = event.y;
                    if (phase == 'move'){
                        if (!scrolling){
                            var modifier = (direction == 'up')? -1: 1;

                            if (new Date().getTime() - timestamp > 500){
                                missedScrolls = 1;
                            }
                            var container = $(event.currentTarget);
                            var list = container.parent();
                            var moveDistance = itemHeight * missedScrolls * modifier;

                            var listOffset = list.offset();
                            var listHeight = list.outerHeight();

                            var containerOffset = container.offset();
                            var containerHeight = container.outerHeight();

                            if (containerOffset.top + moveDistance > listOffset.top + 1){
                                moveDistance = listOffset.top - containerOffset.top + 1;
                            } else if (containerOffset.top + containerHeight + moveDistance < listOffset.top + listHeight - 1){
                                moveDistance = (listOffset.top + listHeight - 1) - (containerOffset.top + containerHeight);
                            }

                            $(event.currentTarget).animate(
                                {top: '+=' + moveDistance + 'px'},
                                {
                                    duration: 100,
                                    start: function(){scrolling = true;},
                                    complete: function(){scrolling = false;}
                            });
                            missedScrolls = 1;
                            timestamp = new Date().getTime();
                        } else {
                            missedScrolls += 1;
                        }
                    }
                },
                threshold: itemHeight,
                triggerOnTouchLeave: true
            });
        };

        $scope.$on('listRendered', function(event){
            ctrl.enableScroll();
        });

    }]);

})();
