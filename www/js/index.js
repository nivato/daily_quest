"use strict";

(function(){
    var app = angular.module('DailyQuest', ['ngRoute', 'ngTouch', 'ngCordova']);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $routeProvider
            .when('/', {templateUrl: 'templates/home.html', controller: 'HomeController', controllerAs: 'home'})
            .when('/blah', {templateUrl: 'templates/home2.html', controller: 'HomeController2', controllerAs: 'home2'})
            .when('/heroes', {templateUrl: 'templates/heroes.html', controller: 'HeroesController', controllerAs: 'heroes'})
            .when('/items', {templateUrl: 'templates/items.html', controller: 'ItemsController', controllerAs: 'items'})
            .when('/missions', {templateUrl: 'templates/missions.html', controller: 'MissionsController', controllerAs: 'missions'})
            .when('/book', {templateUrl: 'templates/book.html', controller: 'BookController', controllerAs: 'book'})
            .when('/pantheon', {templateUrl: 'templates/pantheon.html', controller: 'PantheonController', controllerAs: 'pantheon'})
            .when('/adventure', {templateUrl: 'templates/adventure.html', controller: 'AdventureController', controllerAs: 'adventure'})
            .otherwise({templateUrl: 'templates/home.html', controller: 'HomeController', controllerAs: 'home'});
    }]);

})();
