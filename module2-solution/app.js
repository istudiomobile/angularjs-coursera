(function(){

    'use strict';

    angular.module('moduleOneApp', [])
    
    .controller('toBuyController', ['$scope', 'sharingService', function($scope, sharingService){

        //---- Variables ----
        $scope.toBuyListMsg = "To Buy:";
        $scope.toBuyItems = sharingService.toBuyItems;        

        //---- Methods ----
        $scope.removeItem = function(item, index){
            $scope.toBuyItems.length != 1 ? $scope.toBuyListMsg = "To Buy:" : $scope.toBuyListMsg = "Everything is bought!";
            sharingService.removeItem(item, index);
        };

    }])

    .controller('boughtController', ['$scope', 'sharingService', function($scope, sharingService){

        //---- Variables ---- 
        $scope.boughtListMsg = sharingService.boughtListMsg;       
        $scope.boughtItems = sharingService.boughtItems;
        

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