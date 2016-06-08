angular.module('canhe.controllers', [])
  .controller('homeCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.myInterval = 3000;
    $scope.myImg = 'img/logo.png';
    $scope.clickPic=function(obj){
      console.log(obj);
    }
  }])
  .controller('listCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.myImg = 'img/logo.png';
  }])

  .controller('orderCtrl',['$scope',function($scope){
    $scope.nowOrderItem='profile'
    $scope.orderItems=function(value){
      if(value&&$scope.nowOrderItem!=value){
        $scope.nowOrderItem=value;
      }
    }
  }])
