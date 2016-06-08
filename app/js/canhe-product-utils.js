angular.module('canhe.directives',[])
  .directive('productUtil',[function(){
    return {
      restrict:'EC',
      replace:true,
      link:function($scope,element,attr){
        var isOver=false;
        $scope.backGroundColor={'backgroundColor':'white'};
        $scope.mouseOnItem=function(){
          if(!isOver){
            isOver=true;
            console.log('in');
            $scope.backGroundColor={'backgroundColor': 'ghostwhite'};
          }
        }
        $scope.mouseOutItem=function(){
          if(isOver){
            console.log('out')
            isOver=false;
            $scope.backGroundColor={'backgroundColor': 'white'};
          }
        }
      },
      templateUrl:'components/product-util.html'
    }
  }])
