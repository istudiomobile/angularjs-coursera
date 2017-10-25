(function(){
    'use strict',

    angular.module('menuapp')
    .component('items', {
        bindings: {shortName: '<'},
        templateUrl: 'items/items.template.html',
        controller: function(){
            
        }
    });

}());