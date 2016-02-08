describe('Exchange Service', function() {

  'use strict';

  beforeEach(module('rcredits'));
  beforeEach(function() {
    module(function($exceptionHandlerProvider) {
      $exceptionHandlerProvider.mode('log');
    });
  });

  var rootScope, httpBackend, exchangeService;

  beforeEach(inject(function($rootScope, $httpBackend, _ExchangeService_) {
    httpBackend = $httpBackend;
    rootScope = $rootScope;
    exchangeService = _ExchangeService_;

    $httpBackend.whenGET(/templates\/*/).respond(function(method, url, data, headers) {
      return [200, '<div></div>'];
    });

    $httpBackend.whenGET(/js\/languages\/definitions\//).respond(function(method, url, data, headers) {
      return [200, {}];
    });

  }));

  describe('Create Money Types', function() {

    it('Should create Money Types when instantiated', function() {
      expect(exchangeService.getMoneyTypes()).not.toBe(undefined);
    });

    it('Should return cloned money Instances', function() {
      expect(exchangeService.getMoneyTypes()).not.toBe(exchangeService.moneyTypes);
    });

  });

});



