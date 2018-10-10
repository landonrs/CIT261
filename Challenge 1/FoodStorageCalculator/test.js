var assert = require('assert');
var foodCalculator = require('./src/js/index.js');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Math', function() {
    it("should test if 3 * 3 = 9", function() {
        assert.equal(3*3, 9);
    });
    it("should test if (3–4)*8 = -8", function() {
        assert.equal((3-4)*8, -8);
    });
    
})

describe("Food Calculator", function() {
  it("should get name of food item from object", function(){
    var rice = foodCalculator.rice;
    assert.equal("rice", rice.name);
  });
  it("should calculate the estimated needed amount", function(){
    var rice = foodCalculator.rice;
    assert.equal(20, rice.determineNeededAmount(30, [2, 2], .2));
  });
})

