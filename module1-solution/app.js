(function(){

    'use strict';

    angular.module('moduleOneApp', [])
    
    .controller('moduleOneController', function($scope){

        //---- Variables ----
        var itemsArray = [];
        $scope.items = {};

        //---- Array filter ----
        function arrayFilter(item){
            return item !== " " && item;
        }

        //---- Method to check string ----
        $scope.checkIfTooMuch = function(){        
            if($scope.items.lunch){
                itemsArray = $scope.items.lunch.split(",");
                var filteredArray = itemsArray.filter(arrayFilter);
                filteredArray.length <= 3 ? $scope.message = "Enjoy!" : $scope.message = "Too much!";
                $scope.message == "Enjoy!" ? $scope.classToApply = "success" : $scope.classToApply = "fail";
            } else {
                $scope.message = "Please enter data first!";
            }
            
        };

    })

})();