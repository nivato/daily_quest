"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.controller('HomeController2', ['$deviceReady', function($deviceReady){
        this.title = 'Another View!!!';

        this.sayHi = function(){
            alert('Hi! :)');
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
