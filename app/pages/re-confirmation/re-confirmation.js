'use strict';

angular.module('myApp.re-confirmation', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/re-confirmation', {
    templateUrl: 'pages/re-confirmation/re-confirmation.html',
    controller: 're-confirmationCtrl'
  });
}])

.controller('re-confirmationCtrl', [function() {

}]);