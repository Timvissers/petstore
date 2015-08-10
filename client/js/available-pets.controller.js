'use strict';

angular.module('petstoreApp').controller('AvailablePetsController', function($http){

    var self = this;

    self.availablePets = [];

    $http.get('/api/pets').success(function (availablePets) {
        self.availablePets = availablePets;
    });

});