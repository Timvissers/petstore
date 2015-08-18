'use strict';

describe('Controller: HomeController', function () {

    // load the controller's module
    beforeEach(module('petstoreApp'));
    beforeEach(module('socketMock'));

    var HomeController;
    var scope;
    var aPet = {name: 'deer'};
    var mockedPetsFetcher = {
        getList : function(callback){callback([aPet]);}
    };
    var mockedSMACJsonFetcher = {
        all : function(){return mockedPetsFetcher;}
    };

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        HomeController = $controller('HomeController', {
            $scope: scope,
            SMACJsonFetcher: mockedSMACJsonFetcher
        });
    }));

    it('should attach a list of pets to the scope', function () {
        expect(HomeController.availablePets).toEqual([aPet]);
    });
});
