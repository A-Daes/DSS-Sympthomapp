'use strict';

angular.module('myApp.recovery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recovery', {
    templateUrl: 'recovery/recovery.html',
    controller: 'recoveryCtrl'
  });
}])

.controller('recoveryCtrl', [function() {

}]);