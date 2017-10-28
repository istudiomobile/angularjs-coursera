(function(){
    'use strict';
    angular.module('menuapp')
    .component('home', {
        bindings: { items: '<'},
        templateUrl: 'home/home.template.html',
        controller: function (MenuDataService){// <------------- Service not used to pull data from database!!

            //---- NOTE: Don't get confused here!!! Not using the service to pull data in.
            //---- It is used to keep location state only!!!

            /*---- Variables ----*/
            var home = this;
            this.state = MenuDataService.state;

        }
    });
}());