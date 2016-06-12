angular.module('canhe.controllers', ['ngNumberPicker'])
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
  .controller('productCtrl',['$scope',function($scope){
    $scope.input = {num: 0};
    $scope.getNumber = function() {
      alert('The number is: [' + $scope.input.num + ']');
    };
    $scope.onChange = function() {
      console.log('number changed', $scope.input.num);
    };
  }])
