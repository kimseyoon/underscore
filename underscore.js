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
        if(list[i].hasOwnProperty(key) && properties[key] === list[i][key]){
          isHas = true;
        }else{
          isHas = false;
          break;
        }
      }
      if(isHas === true){
        result.push(list[i]);
      }
    }
    return result;
  }

  var findWhere = function(list, properties){
    var i,
        listLength = list.length;
    for(i = 0; i < listLength; i++){
      var isHas = false;
      for(var key in properties){
        if(list[i].hasOwnProperty(key) && list[i][key] === properties[key]){
          return list[i]
        }
      }
    }
  }

  var reject = function(list, cb){
    var i,
        listLength = list.length,
        result = [];
    for(i = 0; i < listLength; i++){
      if(!cb(list[i])){
        result.push(list[i])
      }
    }
    return result;
  }

  var every = function(list, cb){
    var i,
        listLength = list.length,
        isEvery = true;
    if(cb === undefined){
      for(i = 0; i < listLength; i++){
        if(!list[i]){
          isEvery = false;
          return isEvery;
        }
      }
    }else{
      for(i = 0; i < listLength; i++){
        if(!cb(list[i])){
          isEvery = false;
          return isEvery;
        }
      }
    }
    return isEvery;
  }

  var some = function(list, cb){
    var i,
        listLength = list.length,
        isSome = false;
    if(cb === undefined){
      for(i = 0; i < listLength; i++){
        if(list[i]){
          isSome = true;
          return isSome
        }
      }
    }else{
      for(i = 0; i < listLength; i++){
        if(cb(list[i])){
          isSome = true;
          return isSome;
        }
      }
    }
    return isSome;
  }

  var contains = function(list, value){
    var isContains = false;
    if(list.indexOf(value)){
      isContains = true;
    }
    return isContains
  }

  var invoke = function(list, methodName, arg){
    var i,
        listLength = list.length,
        result = [];
    for(i = 0 ; i < list.length; i++){
      result.push(list[i][methodName](arg));
    }
    return result;
  }

  var pluck = function(list, propertyName){
    var i,
        listLength = list.length,
        result = [];
    for(i = 0; i < listLength; i++){
      result.push(list[i][propertyName]);
    }
    return result;
  }

  var max = function(list, cb){
    var i,
        listLength = list.length,
        maxNum = 0,
        num = 0,
        index = 0;
    if(cb === undefined){
      for(i = 0; i < listLength; i++){
        if(maxNum < list[i]){
          maxNum = list[i];
          index = i;
        }
      }
      return list[index];
    }else{
      for(i = 0; i < listLength; i++){
        num = cb(list[i])
        if(maxNum < num){
          maxNum = num;
          index = i;
        }
      }
      return list[index];
    }
  }

  var min = function(list, cb){
    var i,
        listLength = list.length,
        minNum = 0,
        num = 0,
        index = 0;
    if(cb === undefined){
      for(i = 0; i < listLength; i++){
        if(minNum > list[i]){
          minNum = list[i];
          index = i;
        }
      }
      return list[index];
    }else{
      for(i = 0; i < listLength; i++){
        num = cb(list[i])
        if(minNum > num){
          minNum = num;
          index = i;
        }
      }
      return list[index];
    }
  }

  var sortBy = function(list, cb){
    var i,
        listLength = list.length,
        cbReturnArr = [],
        dataStore = {},
        result = [];

    if(typeof cb === "function"){
      for(i = 0; i < listLength; i++){
        dataStore[list[i]] = cb(list[i]);
        cbReturnArr.push(dataStore[list[i]])
      }

      var sortedArr = _quickSort(cbReturnArr);
      for(var i = 0; i < sortedArr.length ; i++){
        for (var key in dataStore){
          if(dataStore[key] === sortedArr[i]){
            console.log(typeof key)
            result.push(key)
          }
        }
      }

      console.log(result)



      return result
    }else{
      console.log("dd")
    }

  }

  function _quickSort(arr){
    if(arr.length == 0){
      return [];
    }
    var i,
        arrLength = arr.length,
        left = [],
        right = [],
        pivot = arr[0];
    for(i = 1; i < arrLength; i++){
      if(arr[i] < pivot){
        left.push(arr[i]);
      }else{
        right.push(arr[i]);
      }
    }
    return _quickSort(left).concat(pivot, _quickSort(right));
  }

  var groupBy = function(list, cb){
    var i,
        listLength = list.length,
        cbReturnVal,
        obj = {};

    for(i = 0 ; i < listLength; i++){
      if(typeof cb === "function"){
        cbReturnVal = cb(list[i]);
      }else{
        cbReturnVal = list[i][cb];
      }
      if(!obj[cbReturnVal]){
        obj[cbReturnVal] = []
      }
      obj[cbReturnVal].push(list[i]);
    }
    return obj;
  }

  var indexBy = function(list, cb){
    var i,
        listLength = list.length,
        obj = {};

    for(i = 0 ; i < listLength ; i++){
      obj[list[i][cb]] = list[i];
    }

    return obj;
  }

  var countBy = function(list, cb){
    var i,
        listLength = list.length,
        val,
        obj = {};
    for(i = 0; i < listLength; i++){
      val = cb(list[i]);
      if(!obj[val]){
        obj[val] = 1;
      }else{
        obj[val] += 1;
      }
    }
    return obj;

  }

  var shuffle = function(list){
    var i,
        listLength = list.length,
        index,
        temp;

    for(i = listLength - 1; i > 0; i--){
      index = Math.floor((Math.random() * (i)) + 0);
      temp = list[i];
      list[i] = list[index];
      list[index] = temp;
    }

    return list;
  }

  var sample = function(list, num){
    var i,
        index,
        result = [];

    if(num === undefined){
      index = Math.floor((Math.random() * (list.length)) + 0);
      return list[index];
    }

    for(i = 0 ; i < num ; i++){
      var listLength = list.length;
      index = Math.floor((Math.random() * (listLength)) + 0);
      result.push(list.splice(index, 1)[0]);
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
    "where" : where,
    "findWhere" : findWhere,
    "reject" : reject,
    "every" : every,
    "some" : some,
    "contains" : contains,
    "invoke" : invoke,
    "pluck" : pluck,
    "max" : max,
    "min" : min,
    "sortBy" : sortBy,
    "groupBy" : groupBy,
    "indexBy" : indexBy,
    "countBy" : countBy,
    "shuffle" : shuffle,
    "sample" : sample
  }

})(window)
