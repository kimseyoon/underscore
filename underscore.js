"use strict"

var _ = window._ || {};

_ = (function(window){
  var global = window;
/*
parameter : (list[Array or Object], iteratee)
return : array
*/

  var each = function(list, cb){
    var i,
        listLength = list.length;
    if(Array.isArray(list)){
      for(i = 0; i < listLength; i++){
        cb(list[i]);
      }
    }else{
      for(var key in list){
        cb(list[key]);
      }
    }
  }

  var map = function(list, cb){
    var i,
        listLength = list.length,
        result = [];
    if(Array.isArray(list)){
      for(i = 0; i < listLength; i++){
        result.push(cb(list[i]));
      }
    }else{
      for(var key in list){
        result.push(cb(list[key]));
      }
    }
    return result;
  }

  var reduce = function(list, cb, memo){
    var i,
        listLength = list.length,
        result = 0;
    for(i = 0; i < listLength; i++){
      memo = cb(memo, list[i]);
    }
    result = memo;
    return result;
  }

  var reduceRight = function(list, cb, memo){
    var i,
        listLength = list.length,
        result = 0;
    for(i = listLength - 1; i >= 0; i--){
      memo = cb(memo, list[i]);
    }
    result = memo;
    return result;
  }

  var find = function(list, cb){
    var i,
        listLength = list.length;

    for(i = 0 ; i < listLength; i++){
      if(cb(list[i])){
        return list[i]
      }
    }
  }

  var filter = function(list, cb){
    var i,
        listLength = list.length,
        result = [];

    for(i = 0; i < listLength; i++){
      if(cb(list[i])){
        result.push(list[i])
      }
    }

    return result;
  }

  var where = function(list, properties){
    var i,
        listLength = list.length,
        result = [];

    for(i = 0 ; i < listLength; i++){
      var isHas = false;
      for(var key in properties){
        if(list[i].hasOwnProperty(key)){
          if(properties[key] === list[i][key]){
            isHas = true;
          }else{
            isHas = false;
            break;
          }
        }
      }
      if(isHas === true){
        result.push(list[i]);
      }
    }
    return result;
  }

  return {
    "each" : each,
    "map" : map,
    "reduce" : reduce,
    "reduceRight" : reduceRight,
    "find" : find,
    "filter" : filter,
    "where" : where
  }

})(window)
