var URL = "";

function getRecipes(ingredients, sortType) {
    this.setURL(ingredients, sortType);
    console.log(URL);
    fetch(URL).then(data => {
        // console.log(data);
        return data.json();
    })
    .then(res=> { formResultPage(res)})
};

function formResultPage(recipes) {
    // console.log(recipes);
    let resultsDiv = document.getElementById("searchResults");
    //clear previous results
    resultsDiv.innerHTML = "";
    let recipeNum = recipes.count;
    let results = recipes.recipes;

    if (recipeNum >= 3) {

        for (var i = 0; i < recipeNum; i += 3) {
            if(recipeNum - i < 3) {
                break;
            }
            // fill in section with 3 recipes per row
            let rSection = document.createElement("section");
            rSection.setAttribute("class", "resultRow");
            let recipeDivs = `
            <div class="leftImg foodBox">
                <figure>
                    <figcaption class="foodTitle">${results[i].title}</figcaption>
                    <a href="${results[i].source_url}" target="_blank">
                        <img class="foodImg" src="${results[i].image_url}">
                    </a>
                </figure>
            </div>
            <div class="centerImg foodBox">
                <figure>
                    <figcaption class="foodTitle">${results[i + 1].title}</figcaption>
                    <a href="${results[i + 1].source_url}" target="_blank">
                        <img class="foodImg" src="${results[i + 1].image_url}">
                    </a>
                </figure>
            </div>
            <div class="rightImg foodBox">
                <figure>
                    <figcaption class="foodTitle">${results[i + 2].title}</figcaption>
                    <a href="${results[i + 2].source_url}" target="_blank">
                        <img class="foodImg" src="${results[i + 2].image_url}">
                    </a>
                </figure>
            </div>`;
            rSection.innerHTML = recipeDivs;
            resultsDiv.appendChild(rSection);
        }
    }
    else {
        resultsDiv.innerHTML = '<h2 id="searchError">Your search did not return enough results!</h2>';
    }
};

//convenience method for unit testing
function setURL(ingredients, sortType) {
    URL = "https://www.food2fork.com/api/search" + "?key=" + API_KEY + "&q=" + ingredients
    + "&sort=" + sortType;
};

function getURL() { return URL; };

module.exports = {getRecipes: getRecipes, formResultPage: formResultPage, setURL, setURL, getURL: getURL};