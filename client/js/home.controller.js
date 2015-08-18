'use strict';

angular.module('petstoreApp')
    .controller('HomeController', function ($scope, socket, SMACJsonFetcher) {

        var self = this;

        self.availablePets = [];
        self.newPet = {};

        var petsFetcher = SMACJsonFetcher.all('/api/pets');
        petsFetcher.getList(function(list){
            self.availablePets = list;
            socket.syncUpdates('pet', self.availablePets);
        });

        self.addPet = function () {
            if (self.newPet.name === '') {
                return;
            }
            petsFetcher.addOne(self.newPet);
            self.newPet = {};
        };

        self.deletePet = function (pet) {
            var petFetcher = SMACJsonFetcher.one('/api/pets', pet._id);
            petFetcher.deleteOne();
        };

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('pet');
        });
    });
