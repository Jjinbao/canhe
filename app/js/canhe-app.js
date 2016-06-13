/**
 * Created by Administrator on 2016/6/2.
 */
angular.module('myApp',['ngRoute','canhe.service','canhe.controllers','canhe.directives'])
  .run(['$rootScope','$location',function($rootScope,$location){
    $rootScope.navBarHide=false;
    $rootScope.$on('$routeChangeStart', function() {
      if($location.path().toString()==='/cart/checkout'){
        $rootScope.navBarHide=true;
      }else{
        $rootScope.navBarHide=false;
      }
    });
  }])
  .config(['$routeProvider',function($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl:'templates/home.html',
        controller:'homeCtrl'
      })
      .when('/list',{
        templateUrl:'templates/list.html',
        controller:'listCtrl'
      })
      .when('/list/product/3027',{
        templateUrl:'templates/product.html',
        controller:'productCtrl'
      })
      .when('/cart/checkout',{
        templateUrl:'templates/checkout.html',
        controller:'checkoutCtrl'
      })
      .when('/order',{
        templateUrl:'templates/orders.html',
        controller:'orderCtrl'
      })
      .when('/about',{
        templateUrl:'templates/about.html'
      })
      .when('/custom',{
        templateUrl:'templates/custom.html'
      })
      .when('/login',{
        templateUrl:'templates/login.html'
      })
      .when('/reg',{
        templates:'templates/reg.html'
      })
      .otherwise({
        redirectTo:'/'
      })
  }])
.controller('myCtrl',['$rootScope','$scope','$location','dataService',function($rootScope,$scope,$location,dataService){
    $scope.title='login';
    $scope.barName='home';
    $scope.list_data=dataService.data;
    dataService.res('jiames');
    $scope.$watchCollection('list_data',function(newVal){
      console.log(newVal);
    });
    $scope.detailProdect = function () {
      $scope.barName='';
      $location.path('/list/product/3027');
    }
    var urlStr=$location.path().substring(1);
    if(urlStr){
      $scope.barName=urlStr;
    }

    $scope.clickBar=function(value){
      if(value!=$scope.barName){
        $scope.barName=value;
      }
    }

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState){
        console.log('root start changed');
    })
  }])
