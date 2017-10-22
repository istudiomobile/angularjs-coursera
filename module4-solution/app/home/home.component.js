(function(){
    'use strict';
    angular.module('menuapp')
    .component('Home', {
        templateUrl: 'home/home.html',
        controller: function HomeCtrl(){

            /*---- Variables ----*/
            var home = this;
            home.state = MenuDataService.state;

        }
    });
}());