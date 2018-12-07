function everyWSome(array, pFunction) {
    var allTrue = true;

    array.some(function (x) {
        if(!pFunction(x)) {
            allTrue = false;
        }

    });

    return allTrue;
}

function every(array, pFunction) {

    for(item in array) {
        if (!pFunction(array[item])) {
            return false;
        }
    }

    return true;
}

var testArray = [1, 2, 3, 4];
var oddArray = [1, 3, 5, 7];

function isOdd(number){
    if ((number % 2) == 1 || number == 1) {
        return true;
    }
    console.log("number not odd " + number + ":" + number % 2);
    return false;
}

every(testArray, isOdd);
every(oddArray, isOdd);
everyWSome(testArray, isOdd);
everyWSome(oddArray, isOdd);

