(function(){

    'use strict';

    angular.module('NarrowItDownApp', [])
    
    .controller('NarrowItDownController', ['MenuSearchService', function(MenuSearchService){

        //---- Variables ----
        var vm = this;

        //---- Methods ----
        vm.searchForDescription = function(description){
            MenuSearchService.getMatchedMenuItems(description).then(function(items){
                if(items.length > 0){
                    vm.foundItems = items;
                } else {
                    vm.foundItems[0] = "Nothing found!";
                }
            });            
        };

        vm.removeItem = function(pointer){
            vm.foundItems.splice(pointer, 1);
        };

    }])

    .service('MenuSearchService', ['$http', function($http){

        //---- Methods ----
        this.getMatchedMenuItems = function(word){
            return $http({method:'GET', url:'https://davids-restaurant.herokuapp.com/menu_items.json'}).then(function (result) {
                // process result and only keep items that match
                return result.data.menu_items.filter((item) => {return item.description.search(word) !== -1});              
            });        
        };
        

    }])

    .directive('foundItems', function(){

        var ddo = {
            templateUrl: 'descriptionsList.html',
            scope:{
                items: '<',
                onRemove: '&'
            }
        };

        return ddo;

    });

})();