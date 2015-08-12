'use strict';

angular.module('petstoreApp').directive('smacGrid', function(){
    return {
        restrict: 'E',
        scope: {
            list: '='
        },
        templateUrl: '../partials/smac-grid.html'
    };
});