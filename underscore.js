"use strict"

var _ = (function(window){
  var global = window;
/*
parameter : (list[Array or Object], iteratee)
return : array
*/
  return {
    each : function(list, cb){
      var i;
      if(Array.isArray(list)){
        for(i = 0; i < list.length; i++){
          cb(list[i]);
        }
      }else{
        for(var key in list){
          cb(list[key]);
        }
      }
    },

    map : function(list, cb){
      var i,
          result = [];
      if(Array.isArray(list)){
        for(i = 0; i < list.length; i++){
          result.push(cb(list[i]));
        }
      }else{
        for(var key in list){
          result.push(cb(list[key]));
        }
      }
      return result;
    },

    reduce : function(list, cb, memo){
      var i,
          result = 0;
      for(i = 0; i < list.length; i++){
        memo = cb(memo, list[i]);
      }
      result = memo;
      return result;
    }
  }

})(window)
