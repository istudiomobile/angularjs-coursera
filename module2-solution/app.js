(function(){

    'use strict';

    angular.module('moduleOneApp', [])
    
    .controller('toBuyController', ['sharingService', function(sharingService){

        //---- Variables ----
        this.toBuyListMsg = "To Buy:";
        this.toBuyItems = sharingService.toBuyItems;        

        //---- Methods ----
        this.removeItem = function(item, index){
            this.toBuyItems.length != 1 ? this.toBuyListMsg = "To Buy:" : this.toBuyListMsg = "Everything is bought!";
            sharingService.removeItem(item, index);
        };

    }])

    .controller('boughtController', ['sharingService', function(sharingService){

        //---- Variables ----
        this.boughtListMsg = sharingService.boughtListMsg;       
        this.boughtItems = sharingService.boughtItems;
        

    }])

    .service('sharingService', function(){

        this.toBuyItems = [{name: "Cookies bag", qty: 10}, {name: "Juice bottles", qty: 4}, {name: "Maple syrup bottle", qty: 1}, {name: "Waffles box", qty: 1}, {name: "Eggs pkg", qty: 1}];
        this.boughtItems = [];

        this.removeItem = function(item, index){
            this.toBuyItems.splice(index, 1);
            this.addItem(item);
        };

        this.addItem = function(item){
            this.boughtItems.push(item);
        };

    });

})();