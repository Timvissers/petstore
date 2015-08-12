'use strict';

angular.module('petstoreApp').directive('availablePets', function(){
    return {
        restrict: 'E',
        scope: {
            list: '='
        },
        templateUrl: '../partials/available-pets-directive.html'
    };
});