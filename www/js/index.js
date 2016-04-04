"use strict";

(function(){
    var app = angular.module('DailyQuest', ['ngRoute', 'ngCordova']);

    app.config(['$routeProvider', '$locationProvider', '$templates', function($routeProvider, $locationProvider, $templates){
        $locationProvider.html5Mode({enabled: true, requireBase: false});
        $routeProvider
            .when('/', {template: $templates.home, controller: 'HomeController', controllerAs: 'home'})
            .otherwise({template: $templates.home, controller: 'HomeController', controllerAs: 'home'});
    }]);

})();
