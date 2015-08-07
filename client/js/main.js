'use strict';

angular.module('petstoreApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '../partials/main.html',
                controller: 'MainCtrl'
            });
    });