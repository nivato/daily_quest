"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.constant('$templates', {

        home:
            '<div class="app">' +
            '    <h1>{{home.title}}</h1>' +
            '    <div id="deviceready" class="blink">' +
            '        <p class="event listening">Connecting to Device</p>' +
            '        <p class="event received">Device is Ready</p>' +
            '    </div>' +
            '</div>'
    });

})();
