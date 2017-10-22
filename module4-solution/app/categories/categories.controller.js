(function(){
    'use strict';
    angular.module('menuapp')
    .controller('CategoriesCtrl', ['$stateParams','items', 'MenuDataService', function($stateParams, items, MenuDataService){

        //---- Debug ----
        console.log(items);

        //---- Variables ----
        var catgy = this;
        catgy.items = items.data;

    }]);
}());