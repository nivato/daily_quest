"use strict";

(function(){
    var app = angular.module('DailyQuest', ['ngRoute', 'ngCordova']);

    app.config(['$routeProvider', '$locationProvider', '$templates', function($routeProvider, $locationProvider, $templates){
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $routeProvider
            // .when('/', {template: $templates.home, controller: 'HomeController', controllerAs: 'home'})
            // .otherwise({template: $templates.home, controller: 'HomeController', controllerAs: 'home'});
            .when('/', {templateUrl: 'templates/home.html', controller: 'HomeController', controllerAs: 'home'})
            .when('/blah', {templateUrl: 'templates/home2.html', controller: 'HomeController2', controllerAs: 'home2'})
            .otherwise({templateUrl: 'templates/home.html', controller: 'HomeController', controllerAs: 'home'});
    }]);

})();
