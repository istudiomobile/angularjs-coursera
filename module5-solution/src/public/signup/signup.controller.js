(function(){
    'use strict';

    angular.module('public')
    .controller('SignUpController', ['MenuService', '$state', function(MenuService, $state){

        //---- Variables ----
        var  signup = this;
        signup.signupFormData = {};

        //---- Signup user ----
        signup.signUp = function(isValid){
            if(isValid){
                MenuService.signUp(signup.signupFormData.dishnum.toUpperCase()).then(function(response){
                    console.log(response);
                    signup.setUserInfo(response);                    
                    alert('Your information has been saved!');
                    $state.go("public.home");                                        
                })
                .catch(function(error){
                    alert("No such menu number exists");
                    //console.log(error);
                    signup.setUserInfo('No such menu number exists');
                });
            }
        };

        signup.setUserInfo = function(response){
            MenuService.userInfo.first_name = signup.signupFormData.firstname;
            MenuService.userInfo.last_name = signup.signupFormData.lastname;
            MenuService.userInfo.email = signup.signupFormData.email;
            MenuService.userInfo.phone_num = signup.signupFormData.phonenum;
            MenuService.userInfo.dish_num = response.data.name;
            MenuService.userInfo.description = response.data.description;
            MenuService.userInfo.image_url = './images/menu/' + signup.buildImageUrl(signup.signupFormData.dishnum.toUpperCase()) + '/' + signup.buildImageUrl(signup.signupFormData.dishnum.toUpperCase()) + '.jpg';
        };

        signup.buildImageUrl = function(dishname){
            return dishname.replace(/[0-9]/g, '');
        };

    }]);

})();