'use strict';

/**
 * @ngdoc function
 * @name prototiposApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the prototiposApp
 */
angular.module('prototiposApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
