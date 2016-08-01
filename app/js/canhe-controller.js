angular.module('canhe.controllers', ['ngNumberPicker'])
  .controller('homeCtrl', ['$rootScope','$scope', '$location', function ($rootScope,$scope, $location) {
    $scope.myInterval = 3000;
    $scope.myImg = 'img/test0.jpg';
    $scope.clickPic=function(obj){
      console.log(obj);
    }
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState){
      console.log('root start changed');
    })
  }])
  .controller('listCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.myImg = 'img/test1.jpg';
    $scope.colorClassity=0;//餐盒的颜色
    $scope.struClasity=0;//餐盒的结构
    $scope.contentClassity=0;//餐盒的容量
    $scope.filterColor=function(val){
      if($scope.colorClassity===val){
        return;
      }
      $scope.colorClassity=val;
    }

    $scope.filterStru=function(val){
      if($scope.struClasity===val){
        return;
      }
      $scope.struClasity=val;
    }

    $scope.filterContent=function(val){
      if($scope.contentClassity===val){
        return;
      }
      $scope.contentClassity=val;
    }
  }])

  .controller('orderCtrl',['$scope',function($scope){
    $scope.nowOrderItem='profile'
    $scope.orderItems=function(value){
      if(value&&$scope.nowOrderItem!=value){
        $scope.nowOrderItem=value;
      }
    }
  }])
  .controller('productCtrl',['$scope','$location',function($scope,$location){
    $scope.orderBox = {number: 1};
    $scope.nowPrice=120;
    $scope.$watchCollection('orderBox',function(newValue){
      if(newValue&&newValue.number===0){
        $scope.nowPrice=0;
        return;
      }
      if(newValue && newValue.number<5){
        $scope.nowPrice=120;
      }else if(newValue&&newValue.number>=10){
        $scope.nowPrice=115;
      } else{
        $scope.nowPrice=118;
      }
    });

    $scope.checkout=function(){
      $location.path('/cart/checkout');
    }

    $scope.addShoping=function(){
      $location.path('/cart/checkout')
    }
  }])
  .controller('checkoutCtrl',['$scope',function($scope){
    $scope.checkoutMode='online';
    $scope.checkoutWay=function(way){
      if($scope.checkoutMode===way){
        return;
      }
      $scope.checkoutMode=way;
    }
    $scope.addAddress=function(){

    }

    $scope.orderDetail=[
      {'productId':'3027','productName':'环保透明圆形碗500ml','orderNumber':4,'unitPrice':139},
      {'productId':'3004','productName':'PE外卖四格700ml','orderNumber':2,'unitPrice':157},
      {'productId':'2089','productName':'环保透明方格碗900ml','orderNumber':4,'unitPrice':290},
      {'productId':'3980','productName':'透明方碗三格1000ml','orderNumber':4,'unitPrice':310}
    ];

    $scope.price=getPrice();
    function getPrice(){
      var totalPrice=0;
      for(var i = 0; i<$scope.orderDetail.length;++i){
        totalPrice+=$scope.orderDetail[i].orderNumber*$scope.orderDetail[i].unitPrice;
      }
      return totalPrice;
    }

  }])
  .controller('aboutUs',['$scope','$http',function($scope,$http){
    $http({
      url:'http://127.0.0.1:3000/test',
      methods:'GET'
    }).success(function(data,header,config,status){
      console.log(data);
      console.log(header);
      console.log(config);
      console.log(status);
    }).error(function(data,header,config,status){

    })
  }])
