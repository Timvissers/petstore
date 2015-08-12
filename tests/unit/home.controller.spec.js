'use strict';

describe('Controller: HomeController', function () {

    // load the controller's module
    beforeEach(module('petstoreApp'));
    beforeEach(module('socketMock'));

    var HomeController,
        scope,
        $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/api/pets')
            .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

        scope = $rootScope.$new();
        HomeController = $controller('HomeController', {
            $scope: scope
        });
    }));

    it('should attach a list of pets to the scope', function () {
        $httpBackend.flush();
        expect(scope.awesomePets.length).toBe(4);
    });
});
