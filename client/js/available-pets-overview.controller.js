'use strict';

angular.module('petstoreApp').controller('AvailablePetsOverviewController', function(SMACJsonFetcher){

    var self = this;

    var petsFetcher = SMACJsonFetcher.all('/api/pets');
    petsFetcher.getList(function(list){
        self.availablePets = list;
    });

});