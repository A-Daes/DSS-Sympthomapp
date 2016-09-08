'use strict';

angular.module('myApp.recovery', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recovery', {
    templateUrl: 'pages/recovery/recovery.html',
    controller: 'recoveryCtrl'
  });
}])

.controller('recoveryCtrl', [function() {

}]);