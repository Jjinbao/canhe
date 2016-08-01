angular.module('canhe.service',['ngResource'])
.service('dataService',['$resource',function($resource){
    var data={};
    var cart={}
    return {
      data:data,
      res:function(uuid){
        return request_show_data(uuid);
      },
      cart:{},
      login:function(obj){
        return request_login(obj);
      }

    }

    function request_show_data(uuid){
      return $resource('assert/data.json', {uuid: uuid})
        .get(null, function(value) {
          if (value && value.uuid) {
            angular.copy(value,data);
          }
        })
    }

    function request_login(obj){
      return $resource('http://127.0.0.1:3000/login',{})
        .save(null,obj,function(value){
          //console.log(value);
        },function(error){
          //console.log(error);
        })
    }
  }])
.service('userService',['$resource',function($resource){

  }])