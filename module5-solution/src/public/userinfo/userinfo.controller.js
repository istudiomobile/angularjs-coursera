(function(){
    'user strict';

    angular.module('public')
    .controller('UserInfoController', ['MenuService', function(MenuService){

        //---- Variables ----
        var userinfo = this;

        MenuService.userInfo.first_name == '' ? userinfo.flag = true : userinfo.flag = false;

        userinfo.username = MenuService.userInfo.first_name;
        userinfo.lastname = MenuService.userInfo.last_name;
        userinfo.email = MenuService.userInfo.email;
        userinfo.phone = MenuService.userInfo.phone_num;
        userinfo.dishnum = MenuService.userInfo.dish_num;
        userinfo.description = MenuService.userInfo.description;
        userinfo.imgurl = MenuService.userInfo.image_url;        
        //console.log(userinfo.username);
    }]);

})();