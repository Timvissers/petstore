'use strict';

angular.module('petstoreApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router'
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('Home', {
            url:'/',
            templateUrl:'../partials/home.html',
            controller: 'HomeController'
        });
        $stateProvider.state('AvailablePets', {
            url:'/AvailablePets',
            templateUrl:'../partials/available-pets.html'
        });

        $locationProvider.html5Mode(true);
    });