"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.controller('ApplicationController', ['$deviceReady', '$location', function($deviceReady, $location){
        var ctrl = this;
        this.currentView = {id: 'home', label: ''};
        this.mainMenu = [
            {id: 'heroes', label: 'Manage Hero'},
            {id: 'items', label: 'Manage Items'},
            {id: 'missions', label: 'Missions'},
            {id: 'book', label: 'Hero Book'},
            {id: 'pantheon', label: 'Pantheon'},
            {id: 'adventure', label: 'Adventure'}
        ];

        this.backHome = function(){
            $location.replace();
            $location.path('/');
            this.currentView = {id: 'home', label: ''};
        };

        this.goTo = function(item){
            $location.replace();
            $location.path(item.id);
            this.currentView = item;
        };

        $(function() {
            FastClick.attach(document.body);
        });
    }]);

})();
