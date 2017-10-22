(function(){
    'use strict';
    angular.module('data')
    .service('MenuDataService', ['$http', function($http){

        this.state = {home: false, categories: false, detail: false};

        this.getAllCategories = function(){
            return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/categories.json'
            });
        };

        this.set_menu_state = function(view, state){
            this.state[view] = state;
        };

    }]);
}());