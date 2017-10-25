(function(){
    'use strict';
    angular.module('menuapp')
    .component('home', {
        bindings: { items: '<'},
        templateUrl: 'home/home.template.html',
        controller: function (MenuDataService){

            /*---- Variables ----*/
            var home = this;
            this.state = MenuDataService.state;

        }
    });
}());