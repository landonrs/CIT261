function runCode(code) {
    try {
        let userFunction = Function(code)();
        console.log(String(userFunction));
    } catch (err) {
        console.log("ERROR, your code is not valid");
    }
}