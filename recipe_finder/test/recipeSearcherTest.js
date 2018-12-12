const assert = require('chai').assert;
var sinon = require('sinon');
var recipeSearcher = require('../js/recipeSearcher');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;

// const domString = '<!DOCTYPE html><html><head></head><body><button id="searchRatingButton" type="button"><button id="searchTrendyButton" type="button">search recent popular recipes</button>search recipes</button><div id="searchResults"></div></body></html>';
// const dom = new JSDOM(domString);
var dom = null;

// use this to verify the function generates the correct html
var recipeResults = {
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

// before running tests, generate our document from our html file
before(async () => {
        var dom = await JSDOM.fromFile("recipe_finder.html");
        global.window = dom.window;
        global.document = dom.window.document;
});

describe("populating result list", function() {
    it("should add sections to results", function(){
        let resultDiv = document.getElementById("searchResults");

        // test
        recipeSearcher.formResultPage(recipeResults);
        
        // verify
        assert.isTrue(resultDiv.hasChildNodes());
        let rows = resultDiv.getElementsByClassName("resultRow");
        assert.equal(rows.length, 2);
    });

    it("should add images with links", function(){
        let resultDiv = document.getElementById("searchResults");
        // test
        recipeSearcher.formResultPage(recipeResults);
        
        // verify that images have link parent with target attribute
        let images = resultDiv.getElementsByClassName("foodImg");
        assert.isTrue(images[0].parentNode.hasAttribute("target"));
    });

    it("should generate correct URL", function() {
        API_KEY = "12345";

        //test
        recipeSearcher.setURL("chicken", "r");
        
        // verify
        assert.equal("https://www.food2fork.com/api/search?key=12345&q=chicken&sort=r", recipeSearcher.getURL());
    }); 
});

