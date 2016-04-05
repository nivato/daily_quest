"use strict";

(function(){
    var app = angular.module('DailyQuest');

    app.controller('HomeController2', ['$deviceReady', '$cordovaSQLite', function($deviceReady, $cordovaSQLite){
        this.title = 'Another View!!!';

        this.sayHi = function(){
            $deviceReady(this.dbOperation.bind(this));
        };

        this.dbOperation = function(){
            var db = $cordovaSQLite.openDB({name: 'my.db', location: 'default', androidLockWorkaround: 1});

            db.transaction(function(tx) {
                // tx.executeSql('DROP TABLE IF EXISTS test_table');
                tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, data text, data_num integer)');

                // demonstrate PRAGMA:
                db.executeSql("pragma table_info (test_table);", [], function(res) {
                    console.log("PRAGMA res: " + JSON.stringify(res));
                });

                tx.executeSql("INSERT INTO test_table (data, data_num) VALUES (?,?)", ["test", 100], function(tx, res) {
                    console.log("insertId: " + res.insertId + " -- probably 1");
                    console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");

                    db.transaction(function(tx) {
                        tx.executeSql("select count(id) as cnt from test_table;", [], function(tx, res) {
                            console.log("res.rows.length: " + res.rows.length + " -- should be 1");
                            console.log("res.rows.item(0).cnt: " + res.rows.item(0).cnt + " -- should be 1");
                        });
                    });

                }, function(error) {
                    console.log("ERROR: " + error.message);
                });
            });
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
