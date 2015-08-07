'use strict';

angular.module('petstoreApp')
    .controller('NavbarController', function ($scope, $location) {
        $scope.menu = [
            {'title': 'Home', 'state': 'Home'},
            {'title': 'Available Pets', 'state': 'AvailablePets'}
        ];

        $scope.isCollapsed = true;

        $scope.isActive = function (route) {
            return route === $location.path();
        };
    });