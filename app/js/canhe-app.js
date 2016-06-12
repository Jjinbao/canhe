/**
 * Created by Administrator on 2016/6/2.
 */
angular.module('myApp',['ngRoute','canhe.service','canhe.controllers','canhe.directives'])
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
      .when('/list/prodect',{
        templateUrl:'../templates/product.html',
        controller:'productCtrl'
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
.controller('myCtrl',['$scope','$location','dataService',function($scope,$location,dataService){
    $scope.title='login';
    $scope.barName='home';
    $scope.list_data=dataService.data;
    dataService.res('jiames');
    $scope.$watchCollection('list_data',function(newVal){
      console.log(newVal);
    });
    $scope.detailProdect = function () {
      $scope.barName='';
      $location.path('/list/prodect');
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
  }])