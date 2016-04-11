"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.controller('ApplicationController', ['$deviceReady', function($deviceReady){
        var ctrl = this;
        this.hello = "Welcome!";

        $(function() {
            FastClick.attach(document.body);
        });
    }]);

})();
