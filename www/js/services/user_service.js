app.service('UserService', function($q, $http, $httpParamSerializer, RequestParameterBuilder) {

  var UserService = function() {
    self = this;
    this.user = null;
  };

  // Gets the current user. Returns the user object,
  // or null if there is no current user.
  UserService.prototype.currentUser = function() {
    return {name: "Andrea Green", company: "Tasty Soaps, Inc.", firstLogin: true};
  };

  // Gets the current customer. Returns an object
  // or null if there is no current customer.
  UserService.prototype.currentCustomer = function() {
    return {
      name: "Phillip Blivers", place: "Ann Arbor, MI", balance: 110.23,
      balanceSecret: false, rewards: 8.72, photo: "img/sample-customer.png", firstPurchase: true
    };
  };

  // Logs user in given the scanned info from an rCard.
  // Returns a promise that resolves when login is complete.
  // If this is the first login, the promise will resolve with {firstLogin: true}
  // The app should then give notice to the user that the device is associated with the
  // user.
  UserService.prototype.loginWithRCard = function(str) {
    var qrcodeParser = new QRCodeParser ();
    qrcodeParser.setUrl(str);
    var params = new RequestParameterBuilder (qrcodeParser.parse()).setOperationId('identify').getParams();

    return $http ({
      method: 'POST',
      url: rCreditsConfig.serverUrl,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: $httpParamSerializer (params)
    });
  };

  // Gets customer info and photo given the scanned info from an rCard.
  // Returns a promise that resolves with the following arguments:
  // 1. user - The User object
  // 2. flags - A hash with the following elements:
  //      firstPurchase - Whether this is the user's first rCredits purchase. If so, the
  //        app should notify the seller to request photo ID.
  UserService.prototype.identifyCustomer = function(str) {
    // Simulates a login. Resolves the promise if SUCCEED is true, rejects if false.
    var SUCCEED = true;

    return $q (function(resolve, reject) {
      setTimeout (function() {
        if (SUCCEED) {
          resolve ();
        } else {
          reject ('User lookup failed.');
        }
      }, 1000);
    });
  };

  // Logs the user out on the remote server.
  // Returns a promise that resolves when logout is complete, or rejects with error of fail.
  UserService.prototype.logout = function() {
    // Simulates logout. Resolves the promise if SUCCEED is true, rejects if false.
    var SUCCEED = true;

    return $q (function(resolve, reject) {
      setTimeout (function() {
        if (SUCCEED) {
          resolve ();
        } else {
          reject ('Logout failed.');
        }
      }, 1000);
    });
  }

  return new UserService ();
});
