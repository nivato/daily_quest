"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.directive('scrollList', ['$timeout', function($timeout){
        return {
            restrict: 'E',
            templateUrl: 'templates/scroll_list.html',
            link: function(scope, element, attr){
                var scrolling = false;
                var itemHeight = 38;
                var missedScrolls = 1;
                var timestamp = new Date().getTime();
                var scrollable = element.find('.scroll-container');
                scrollable.mousewheel(function(event){
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
                scrollable.swipe({
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
            },
            transclude: true
        };
    }]);

})();
