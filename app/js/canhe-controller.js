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
    $scope.orderBox = {number: 1};
    $scope.nowPrice=120;
    $scope.$watchCollection('orderBox',function(newValue){
      if(newValue&&newValue.number===0){
        $scope.nowPrice=0;
        return;
      }
      if(newValue && newValue.number<5){
        $scope.nowPrice=120;
        console.log('120');
      }else if(newValue&&newValue.number>=10){
        $scope.nowPrice=115;
        console.log('115');
      } else{
        $scope.nowPrice=118;
        console.log('118');
      }
    })
  }])
