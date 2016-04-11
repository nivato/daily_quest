"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.controller('HeroesController', ['$location', function($location){
        this.title = 'Manage Hero';

        this.back = function(){
            $location.replace();
            $location.path('/');
        };

    }]);

})();
