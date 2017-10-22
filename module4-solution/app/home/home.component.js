(function(){
    'use strict';
    angular.module('menuapp')
    .component('home', {
        templateUrl: 'home/home.html',
        controller: function HomeController(){

            /*---- Variables ----*/
            var home = this;
            home.state = MenuDataService.state;

        }
    });
}());