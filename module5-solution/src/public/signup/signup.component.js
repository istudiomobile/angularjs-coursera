(function(){
    'use strict';

    angular.module('public')
    .controller('SignUpController', function(){

        //---- Variables ----
        var SignUpCtrl = this;
        var signupFormData = {};

        //---- Signup user ----
        SignUpCtrl.signUp = function(isValid){
            console.log(isValid);
        };

    });

})();