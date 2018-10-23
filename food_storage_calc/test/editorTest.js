const assert = require('chai').assert;
const foodCalculator = require('../food');
const editor = require('../editor');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
var sinon = require('sinon');

const domString = '<!DOCTYPE html><html><head></head><body><table id="food-table"><tr><th>Type of Food</th><th>Percentage of planned diet</th><th>Estimated needed amount</th><th>Estimated food item cost</th></tr><tr><td><select id="food-items"></select><img src="add-item.jpg" id="add-food-button"></td><td></td><td></td><td></td></tr></table></body></html>';
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


// utility function for deep copies
function copy(o) {
  var output, v, key;
  output = Array.isArray(o) ? [] : {};
  for (key in o) {
      v = o[key];
      output[key] = (typeof v === "object") ? copy(v) : v;
  }
  return output;
}