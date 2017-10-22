(function(){
    'use strict';

    angular.module('menuapp', ['data', 'ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider

        .state('home', {
            url: '/home',
            component: 'Home',
            resolve:{
                items:['MenuDataService', function(MenuDataService){
                    return MenuDataService.getAllCategories();
                }]
            },
            onEnter: function(MenuDataService){
                MenuDataService.set_menu_state('home', true);
            },
            onExit:function(MenuDataService){
                MenuDataService.set_menu_state('home', false);
            }
        })

        .state('home.categories', {
            url: '/categories',
            templateUrl: 'categories/categories.html',
            controller: 'CategoriesCtrl as catgy',
            onEnter: function(MenuDataService){
                MenuDataService.set_menu_state('categories', true);
            },
            onExit:function(MenuDataService){
                MenuDataService.set_menu_state('categories', false);
            }
        })
        
        .state('detail', {
            url: '/detail',
            templateUrl: 'detail/detail.html',
            controller: 'DetailCtrl as detail',
            onEnter: function(MenuDataService){
                MenuDataService.set_menu_state('detail', true);
            },
            onExit:function(MenuDataService){
                MenuDataService.set_menu_state('detail', false);
            }
        });

    }]);
}());