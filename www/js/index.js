"use strict";

(function(){
    var app = angular.module('DailyQuest', ['ngRoute', 'ngCordova']);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $routeProvider
            .when('/', {templateUrl: 'templates/home.html', controller: 'HomeController', controllerAs: 'home'})
            .when('/blah', {templateUrl: 'templates/home2.html', controller: 'HomeController2', controllerAs: 'home2'})
            .when('/heroes', {templateUrl: 'templates/heroes.html', controller: 'HeroesController', controllerAs: 'heroes'})
            .otherwise({templateUrl: 'templates/home.html', controller: 'HomeController', controllerAs: 'home'});
    }]);

})();
