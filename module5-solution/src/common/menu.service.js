(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.signUp = function(short_name){
    return $http.get('https://istudiomobile.herokuapp.com/menu_items/' + short_name + '.json');
  };

  //---- User Info ----
  service.userInfo = {first_name: '', last_name: '', email: '', phone_num: '', dish_num: ''};

}



})();
