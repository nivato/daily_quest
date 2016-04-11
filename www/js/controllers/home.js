"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.controller('HomeController', ['$deviceReady', '$location', function($deviceReady, $location){
        this.title = 'Apache Cordova';

        this.goToHeroes = function(){
            $location.path('heroes');
        };

        this.sayHi = function(){
            $location.path('blah');
        };

        this.onDeviceReady = function() {
            var parentElement = document.getElementById('deviceready');
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');
        };

        $deviceReady(this.onDeviceReady.bind(this));

    }]);

})();
