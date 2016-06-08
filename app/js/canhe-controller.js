angular.module('canhe.controllers', [])
  .controller('homeCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.myInterval = 3000;
    $scope.myImg = 'img/logo.png';
  }])
  .controller('listCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.myImg = 'img/logo.png';
  }])
