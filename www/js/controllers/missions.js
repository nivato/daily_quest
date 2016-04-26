"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.controller('MissionsController', ['$scope', '$timeout', '$location', function($scope, $location, $timeout){
        var ctrl = this;
        this.tabs = [
            {id: 'daily', label: 'Daily', content: 'Some Daily content'},
            {id: 'weekly', label: 'Weekly', content: 'Some Weekly content'},
            {id: 'monthly', label: 'Monthly', content: 'Some Monthly content'}
        ];
        this.activeTab = this.tabs[0];
        for (var i=0; i<this.tabs.length; i++){
            var tab = this.tabs[i];
            tab.items = [];
            for (var j=0; j<100; j++){
                tab.items.push('Some ' + tab.label + ' Mission ' + j);
            }
        }
        this.modal = false;

    }]);

})();
