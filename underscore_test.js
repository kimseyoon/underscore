var assert = chai.assert;


// _.each([1, 2, 3], alert);
//_.each({"one":2, "two":3}, alert);

// describe("_.each function Test",function(){
//     it("0ms Type Check ", function(){
//         let result = _.each(duration)
//         assert.equal(result,  "00:00:00");
//
//         // _.each([1, 2, 3], alert);
//         //_.each({"one":2, "two":3}, alert);
//     });
// });

describe("_.map function Test",function(){
    it("if parameter type is array  ", function(){
        var result = _.map([1,2,3], function(num){
          return num*2
        })
        assert.deepEqual(result, [2,4,6]);
    });

    it("if parameter type is object", function(){
        var result = _.map({"one":2, "two":3}, function(num){
          return num*2
        })
        assert.deepEqual(result, [4,6]);
    });
});

describe("_.reduce function Test",function(){
    it("two-dimensional array concat", function(){
        var result = _.reduce([[0, 4], [2, 1], [4, 5]], function(a, b) { return a.concat(b); }, [])
        assert.deepEqual(result, [0,4,2,1,4,5]);
    });

    it("every number sum", function(){
        var result = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0)
        assert.equal(result, 6);
    });
});

describe("_.reduceRight function Test",function(){
    it("two-dimensional array concat", function(){
        var result = _.reduceRight([[0, 4], [2, 1], [4, 5]], function(a, b) { return a.concat(b); }, [])
        assert.deepEqual(result, [4,5,2,1,0,4]);
    });

    it("every number sum", function(){
        var result = _.reduceRight([1, 2, 3], function(memo, num){ return memo + num; }, 0)
        assert.equal(result, 6);
    });
});

describe("_.find function Test",function(){
    it("returning the first one that passes a truth test (predicate)", function(){
        var result = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })
        assert.equal(result, 2);
    });
});

describe("_.filter function Test",function(){
    it("returning an array of all the values that pass a truth test (predicate).", function(){
        var result = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
        assert.deepEqual(result, [2, 4, 6]);
    });
});

describe("_.where function Test",function(){
    it("returning an array of all the values that contain all of the key-value pairs listed in properties", function(){
        var listOfPlays = [
          {title: "Cymbeline", author: "Shakespeare", year: 1611},
          {title: "One", author: "Shakespeare", year: 1},
          {title: "Two", author: "Shake", year: 1611},
          {title: "The Tempest", author: "Shakespeare", year: 1611}
        ]
        var result = _.where(listOfPlays, {author: "Shakespeare", year: 1611});
        assert.deepEqual(result, [
          {title: "Cymbeline", author: "Shakespeare", year: 1611},
          {title: "The Tempest", author: "Shakespeare", year: 1611}
        ]);
    });

    it("returning an array of all the values that contain all of the key-value pairs listed in properties", function(){
        var listOfPlays = [
          {title: "Cymbeline", author: "Shakespeare", year: 1611},
          {title: "One", author: "Shakespeare", year: 1},
          {title: "Two", author: "Shake", year: 1611},
          {title: "The Tempest", author: "Shakespeare", year: 1611}
        ]
        var result = _.where(listOfPlays, {author: "She"});
        assert.deepEqual(result, []);
    });
});


describe("_.findWhere function Test",function(){
    it("returns the first value that matches all of the key-value pairs listed in properties.", function(){
        var listOfPlays = [
          {title: "Cymbeline", author: "Shakespeare", year: 1611},
          {title: "One", author: "Shakespeare", year: 1},
          {title: "Two", author: "Shake", year: 1611},
          {title: "The Tempest", author: "Shakespeare", year: 1611}
        ]
        var result = _.findWhere(listOfPlays, {author: "Shakespeare", year: 1611});
        assert.deepEqual(result, {title: "Cymbeline", author: "Shakespeare", year: 1611});
    });

    it("returns the first value that matches all of the key-value pairs listed in properties.", function(){
        var listOfPlays = [
          {title: "Cymbeline", author: "Shakespeare", year: 1611},
          {title: "One", author: "Shakespeare", year: 1},
          {title: "Two", author: "Shake", year: 1611},
          {title: "The Tempest", author: "Shakespeare", year: 1611}
        ]
        var result = _.findWhere(listOfPlays, {age: "18"});
        assert.deepEqual(result, undefined);
    });
});

describe("_.reject function Test",function(){
    it("Returns the values in list without the elements that the truth test (predicate) passes.", function(){
        var result = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
        assert.deepEqual(result, [1, 3, 5]);
    });
});

describe("_.every function Test",function(){
    it("Returns true if all of the values in the list pass the predicate truth test.", function(){
        var result = _.every([2, 4, 5], function(num) { return num % 2 == 0; });
        assert.equal(result, false);
    });

    it("Returns true if all of the values in the list pass the predicate truth test.", function(){
        var result = _.every([2, 4, 6], function(num) { return num % 2 == 0; });
        assert.equal(result, true);
    });

    it("Returns true if any of the values in the list pass the predicate truth test.", function(){
        var result = _.every([null, 0, 'yes', false]);
        assert.equal(result, false);
    });
});

describe("_.some function Test",function(){
    it("Returns true if any of the values in the list pass the predicate truth test.", function(){
        var result = _.some([2, 4, 5], function(num) { return num % 2 == 0; });
        assert.equal(result, true);
    });

    it("Returns true if any of the values in the list pass the predicate truth test.", function(){
        var result = _.some([null, 0, 'yes', false]);
        assert.equal(result, true);
    });
});

describe("_.contains function Test",function(){
    it("Returns true if the value is present in the list.", function(){
        var result = _.contains([1, 2, 3], 3);
        assert.equal(result, true);
    });
});


describe("_.invoke function Test",function(){
    it("Calls the method named by methodName on each value in the list", function(){
        var result = _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
        assert.deepEqual(result, [[1, 5, 7], [1, 2, 3]]);
    });

    it("Calls the method named by methodName on each value in the list", function(){
        var result = _.invoke( [['apple', 'banana', 'mango'],
                                ['pepsi', 'fanta', 'sprite'],
                                ['bear', 'wolf', 'parrot']] , 'join', '#');
        assert.deepEqual(result, ["apple#banana#mango", "pepsi#fanta#sprite", "bear#wolf#parrot"]);
    });
});

describe("_.pluck function Test",function(){
    it("A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.", function(){
        var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
        var result = _.pluck(stooges, 'name');
        assert.deepEqual(result, ["moe", "larry", "curly"]);
    });
});

describe("_.max function Test",function(){
    it("Returns the maximum value in list", function(){
        var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
        var result = _.max(stooges, function(stooge){ return stooge.age; });
        assert.deepEqual(result, {name: 'curly', age: 60});
    });

    it("Returns the maximum value in list", function(){
        var stooges = [1, 100, 20, 14, 44];
        var result = _.max(stooges);
        assert.equal(result, 100);
    });
});

describe("_.min function Test",function(){
    it("Returns the minimum value in list", function(){
        var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
        var result = _.min(stooges, function(stooge){ return stooge.age; });
        assert.deepEqual(result, {name: 'moe', age: 40});
    });

    it("Returns the minimum value in list", function(){
        var stooges = [1, 100, 20, 14, 44];
        var result = _.min(stooges);
        assert.equal(result, 1);
    });
});

describe("_.sortBy function Test",function(){
    it("Returns a (stably) sorted copy of list", function(){
        var result = _.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
        assert.deepEqual(result, [5, 4, 6, 3, 1, 2]);
    });

    it("Returns a (stably) sorted copy of list", function(){
        var result = _.sortBy(["a", "aaa", "aaaa", "a", "", "aaaaaaa"], function(num){ return num.length; });
        assert.deepEqual(result, ["", "a", "a", "aaa", "aaaa", "aaaaaaa"]);
    });

    it("Returns a (stably) sorted copy of list", function(){
        var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
        var result = _.sortBy(stooges, 'name');
        assert.deepEqual(result, [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}]);
    });
});

describe("_.groupBy function Test",function(){
  it("Splits a collection into sets, grouped by the result of running each value through iteratee", function(){
      var result = _.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
      assert.deepEqual(result, {1: [1.3], 2: [2.1, 2.4]});
  });

  it("If iteratee is a string instead of a function, groups by the property named by iteratee on each of the values.", function(){
      var result = _.groupBy(['one', 'two', 'three'], 'length');
      assert.deepEqual(result, {3: ["one", "two"], 5: ["three"]});
  });
});


describe("_.indexBy function Test",function(){
  it(" returns an object with an index of each item", function(){
      var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
      var result = _.indexBy(stooges, 'age');
      assert.deepEqual(result, {
        "40": {name: 'moe', age: 40},
        "50": {name: 'larry', age: 50},
        "60": {name: 'curly', age: 60}
      });
  });
});

describe("_.countBy function Test",function(){
  it("Sorts a list into groups and returns a count for the number of objects in each group", function(){
      var result = _.countBy([1, 2, 3, 4, 5], function(num) {
        return num % 2 == 0 ? 'even': 'odd';
      });
      assert.deepEqual(result, {odd: 3, even: 2});
  });
});
// 어떻게 shuffle이 잘되었는지 궁금합니다.
// describe("_.shuffle function Test",function(){
//   it("Returns a shuffled copy of the list", function(){
//       var result = _.shuffle([1, 2, 3, 4, 5, 6]);
//       assert.deepEqual(result, );
//   });
// });

describe("_.countBy function Test",function(){
  it("Produce a random sample from the list", function(){
      var result = _.sample([1, 2, 3, 4, 5, 6]);
      assert.deepEqual(result,);
  });


  it("Produce a random sample from the list", function(){
      var result = _.sample([1, 2, 3, 4, 5, 6], 3);
      assert.deepEqual(result,);
  });
});

describe("_.toArray function Test",function(){
  it("Creates a real Array from the list", function(){
      var result = (function(){ return _.toArray(arguments).slice(1); })(1, 2, 3, 4)
      assert.deepEqual(result, [2, 3, 4]);
  });
});

describe("_.size function Test",function(){
  it("Return the number of values in the list.", function(){
      var result = _.size({one: 1, two: 2, three: 3});
      assert.equal(result, 3);
  });
});

describe("_.partition function Test",function(){
  it("Split array into two arrays", function(){
      var result = _.partition([0, 1, 2, 3, 4, 5], function(num){return num % 2 == 1});
      assert.deepEqual(result, [[1, 3, 5], [0, 2, 4]]);
  });
});

describe("_.first function Test",function(){
  it("Returns the first element of an array.", function(){
      var result = _.first([5, 4, 3, 2, 1]);
      assert.equal(result, 5);
  });

  it("Returns the first element of an array.", function(){
      var result = _.first([5, 4, 3, 2, 1], 3);
      assert.deepEqual(result, [5, 4, 3]);
  });
});

describe("_.initial function Test",function(){
  it("Returns everything but the last entry of the array", function(){
      var result = _.initial([5, 4, 3, 2, 1]);
      assert.deepEqual(result, [5, 4, 3, 2]);
  });

  it("Returns everything but the last entry of the array", function(){
      var result = _.initial([5, 4, 3, 2, 1], 3);
      assert.deepEqual(result, [5, 4]);
  });
});

describe("_.last function Test",function(){
  it("Returns the last element of an array", function(){
      var result = _.last([5, 4, 3, 2, 1]);
      assert.equal(result, 1);
  });

  it(" Passing n will return the last n elements of the array.", function(){
      var result = _.last([5, 4, 3, 2, 1], 3);
      assert.deepEqual(result, [3, 2, 1]);
  });
});

describe("_.rest function Test",function(){
  it("Returns the rest of the elements in an array.", function(){
      var result = _.rest([5, 4, 3, 2, 1]);
      assert.deepEqual(result, [4, 3, 2, 1]);
  });

  it("Pass an index to return the values of the array from that index onward.", function(){
      var result = _.rest([5, 4, 3, 2, 1], 3);
      assert.deepEqual(result, [2, 1]);
  });
});
