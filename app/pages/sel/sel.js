'use strict';

angular.module('myApp.sel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sel', {
    templateUrl: 'pages/sel/sel.html',
    controller: 'selCtrl'
  });
}])

.controller('selCtrl', [function() {

}]);