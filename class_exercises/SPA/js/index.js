import buildNavigation from './routing.js';

function setup() {
    const navElement = document.getElementById("navList");
    buildNavigation(navElement);

}

setup();