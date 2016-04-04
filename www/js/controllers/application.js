"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.controller('ApplicationController', [function(){
        var ctrl = this;
        this.hello = "Welcome!";

        this.bindEvents = function() {
            document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        };

        this.onDeviceReady = function() {
            this.receivedEvent('deviceready');
        };

        this.receivedEvent = function(id) {
            var parentElement = document.getElementById(id);
            var listeningElement = parentElement.querySelector('.listening');
            var receivedElement = parentElement.querySelector('.received');

            listeningElement.setAttribute('style', 'display:none;');
            receivedElement.setAttribute('style', 'display:block;');

            console.log('Received Event: ' + id);
        };

        this.bindEvents();

    }]);

})();
