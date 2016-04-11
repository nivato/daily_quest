"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.controller('HeroesController', ['$location', function($location){
        this.title = 'Manage Heroe';

        this.back = function(){
            $location.path('/');
        };

    }]);

})();
