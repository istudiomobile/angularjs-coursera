(function(){
    'use strict';

    angular.module('menuapp', ['data', 'ui.router'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider

        .state('home', {
            url: '/home',
            component: 'home',
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
            component: 'categories',
            onEnter: function(MenuDataService){
                MenuDataService.set_menu_state('categories', true);
            },
            onExit:function(MenuDataService){
                MenuDataService.set_menu_state('categories', false);
            }
        })
        
        .state('home.detail', {
            url: '/:categoryShortName',
            component: 'detail',
            resolve:{
                shortName: function($transition$, MenuDataService){
                    return MenuDataService.getItemsForCategory($transition$.params().categoryShortName);
                }
            },
            onEnter: function(MenuDataService){
                MenuDataService.set_menu_state('detail', true);
            },
            onExit:function(MenuDataService){
                MenuDataService.set_menu_state('detail', false);
            }
        });

    }]);
}());