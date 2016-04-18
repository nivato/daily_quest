"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.controller('MissionsController', ['$location', function($location){
        this.tabs = [
            {id: 'daily', label: 'Daily', content: 'Some Daily content'},
            {id: 'weekly', label: 'Weekly', content: 'Some Weekly content'},
            {id: 'monthly', label: 'Monthly', content: 'Some Monthly content'}
        ];
        this.activeTab = this.tabs[0];

    }]);

})();
