var touchPoint = null;

window.addEventListener("touchstart", function(event) {
    if(event.touches.length === 1) {
        touchPoint = event.touches.item(0).clientX;
    }
    else {
        touchPoint = null;
    }
})

window.addEventListener("touchend", function(event) {
    var offset = 300;
    let header = document.getElementById("header");
    let results = document.getElementById("searchResults");

    if(touchPoint != null) { 
        var liftPoint = event.changedTouches.item(0).clientX;

        // left to right swipe
        if (liftPoint > touchPoint + offset) {
            // console.log("swiped Right!");
            header.setAttribute("style", "background-color:blue;");
            results.setAttribute("style", "background-color:red;");

        }
        // right to left
        else if (liftPoint < touchPoint - offset) {
            // console.log("swiped Left!");
            header.setAttribute("style", "background-color:rgb(218, 15, 0);");
            results.setAttribute("style", "background-color:rgba(0, 61, 10, 0.877);");
        }
    }
})