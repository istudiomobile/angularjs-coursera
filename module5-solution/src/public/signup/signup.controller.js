(function(){
    'use strict';

    angular.module('public')
    .controller('SignUpController', ['MenuService', function(MenuService){

        //---- Variables ----
        var  signup = this;
        signup.signupFormData = {};

        //---- Signup user ----
        signup.signUp = function(isValid){
            if(isValid){
                MenuService.signUp(signup.signupFormData.dishnum).then(function(response){
                    console.log(response);
                    signup.setUserInfo(response.data.name);
                    alert('Your information has been saved!');                                        
                })
                .catch(function(error){
                    alert("No such menu number exists");
                    //console.log(error);
                    signup.setUserInfo('No such menu number exists');
                });
            }
        };

        signup.setUserInfo = function(name){
            MenuService.userInfo.first_name = signup.signupFormData.firstname;
            MenuService.userInfo.last_name = signup.signupFormData.lastname;
            MenuService.userInfo.email = signup.signupFormData.email;
            MenuService.userInfo.phone_num = signup.signupFormData.phonenum;
            MenuService.userInfo.dish_num = name;
        };

    }]);

})();