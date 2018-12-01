const assert = require('chai').assert;
var sinon = require('sinon');
var recipeSearcher = require('../js/recipeSearcher');
var RecipeSearcher = recipeSearcher.RecipeSearcher;
var jsdom = require('jsdom');
const { JSDOM } = jsdom;


const domString = '<!DOCTYPE html><html><head></head><body><button id="searchButton" type="button">search recipes</button><div id="searchResults"></div></body></html>';
const dom = new JSDOM(domString);

global.window = dom.window;
global.document = dom.window.document;

describe("populating result list", function() {
    it("should add section to results", function(){
        let resultDiv = document.getElementById("searchResults");
        let recipeResults = {
            count: 6,
            recipes:[
                {"title": "pizza", "image_url":"pizza.png", "source_url": "#"}, 
                {"title": "pizza 2", "image_url":"pizza.png", "source_url": "#"},
                {"title": "pizza 3", "image_url":"pizza.png", "source_url": "#"},
                {"title": "pizza 4", "image_url":"pizza.png", "source_url": "#"},
                {"title": "pizza 5", "image_url":"pizza.png", "source_url": "#"},
                {"title": "pizza 6", "image_url":"pizza.png", "source_url": "#"}
            ]        
        }
      
        RecipeSearcher.formResultPage(recipeResults);
        // verify
        //console.log(resultDiv.innerHTML);
        console.log(resultDiv.innerHTML);
        assert.isTrue(resultDiv.hasChildNodes());
    });
});