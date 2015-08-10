'use strict';

angular.module('petstoreApp').directive('availablePets', function(){
    return {
        templateUrl : '../partials/available-pets-directive.html',
        controllerAs : 'apCtrl',
        controller : 'AvailablePetsController'
    }
});