'use strict';

angular.module('petstoreApp')
    .controller('MainCtrl', function ($scope, $http, socket) {
        $scope.awesomePets = [];

        $http.get('/api/pets').success(function (awesomePets) {
            $scope.awesomePets = awesomePets;
            socket.syncUpdates('pet', $scope.awesomePets);
        });

        $scope.addPet = function () {
            if ($scope.newPet === '') {
                return;
            }
            $http.post('/api/pets', { name: $scope.newPet });
            $scope.newPet = '';
        };

        $scope.deletePet = function (pet) {
            $http.delete('/api/pets/' + pet._id);
        };

        $scope.$on('$destroy', function () {
            socket.unsyncUpdates('pet');
        });
    });
