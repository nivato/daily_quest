"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.controller('HomeController', ['$location', function($location){
        this.title = 'Apache Cordova';

        this.sayHi = function(){
            $location.path('blah');
        };
    }]);

})();
