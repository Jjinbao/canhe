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

    }

    function request_show_data(uuid){
      return $resource('assert/data.json', {uuid: uuid})
        .get(null, function(value) {
          if (value && value.uuid) {
            angular.copy(value,data);
          }
        })
    }
  }])
.service('userService',['$resource',function($resource){

  }])