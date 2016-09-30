(function () {

    'use strict';

    angular.module('myFirstApp', [])

    .controller('MyFirstController', function($scope) {

        $scope.name = "Enrique";

        $scope.sayHello = function() {
            return "Hello " + $scope.name;
        }

    });

})();
