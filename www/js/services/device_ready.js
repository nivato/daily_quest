"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.factory('$deviceReady', [function(){
        return function(handler){
            document.addEventListener('deviceready', handler, false);
        };
    }]);

})();
