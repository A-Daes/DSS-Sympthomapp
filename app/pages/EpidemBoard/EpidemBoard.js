'use strict';

angular.module('myApp.EpidemBoard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/EpidemBoard', {
    templateUrl: 'pages/EpidemBoard/EpidemBoard.html',
    controller: 'EpidemBoardCtrl'
  });
}])

.controller('EpidemBoardCtrl', [function() {

}]);