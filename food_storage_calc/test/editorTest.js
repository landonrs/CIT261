const assert = require('chai').assert;
const foodCalculator = require('../food');
const editor = require('../editor');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
var sinon = require('sinon');

const domString = '<!DOCTYPE html><html><head></head><body><select class="user-options" id="storageSelect"><option value=30>1 Month</option></select><select class="user-options" id="childrenSelect"><option value="0">0</option></select><select class="user-options" id="adultSelect"><option value="0">0</option></select><table id="food-table"><tr><th>Type of Food</th><th>Percentage of planned diet</th><th>Estimated needed amount</th><th>Estimated food item cost</th></tr><tr><td><select id="food-items"></select><img src="add-item.jpg" id="add-food-button"></td><td></td><td></td><td></td></tr></table><h2 id="total-cost">Total Estimated Cost: $0.00</h2></body></html>';
const dom = new JSDOM(domString);

global.window = dom.window;
global.document = dom.window.document;
global.unusedFoodItems = copy(foodCalculator.unusedFoodItems);
global.tableItems = copy(foodCalculator.tableItems);

describe("adding items with table editor", function() {
  var tempTableItems;
  var tempUnusedFoodItems;

  beforeEach(function(){
    // store inital state of arrays
    tempTableItems = copy(global.tableItems);
    tempUnusedFoodItems = copy(global.unusedFoodItems);
    console.log("copying arrays for testing");
  });

  afterEach(function(){
    // reset initial state of foodItem arrays
    global.unusedFoodItems = tempUnusedFoodItems;
    global.tableItems = tempTableItems;
    console.log("resetting global variables")
  });

  it("should add rice to tableItems", function(){
   editor.insertFoodItems();
      
   editor.add_item();

   assert.equal(global.tableItems[0].name, "Rice");
   assert.equal(global.tableItems.length, 1);
  }); 
}); 

describe("removing items with table editor", function() {
  it("should remove item from tableItems array", function(){
    editor.insertFoodItems();
    // adds rice to the tableItems
    editor.add_item();
    //adds beans
    editor.add_item();


    editor.remove_item("Rice-row", "Rice");

    assert.equal(global.tableItems.length, 1);
    assert.notEqual(global.tableItems[0].name, "Rice");
  });
});


// utility function for making deep copies of arrays
function copy(o) {
  var output, v, key;
  output = Array.isArray(o) ? [] : {};
  for (key in o) {
      v = o[key];
      output[key] = (typeof v === "object") ? copy(v) : v;
  }
  return output;
}