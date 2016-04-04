"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.controller('HomeController2', [function(){
        this.title = 'Another View!!!';

        this.sayHi = function(){
            alert('Hi! :)');
        };
    }]);

})();
