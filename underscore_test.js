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
