'use strict';

angular.module('petstoreApp')
    .directive('smacGrid', function(){
        return {
            restrict: 'E',
            scope: {
                list: '=',
                fields: '='
            },
            templateUrl: '../partials/smac-grid.html'
        };
    });