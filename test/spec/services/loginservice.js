'use strict';

describe('Service: loginService', function () {

  // load the service's module
  beforeEach(module('sslv2App'));

  // instantiate service
  var loginService;
  beforeEach(inject(function (_loginService_) {
    loginService = _loginService_;
  }));

  it('should do something', function () {
    expect(!!loginService).toBe(true);
  });

});
