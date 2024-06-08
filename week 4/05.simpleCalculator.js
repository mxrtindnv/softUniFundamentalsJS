function calc(numOne, numTwo, operator) {

    const multiply = (numOne, numTwo) => numOne * numTwo;
    const divide = (numOne, numTwo) => numOne / numTwo;
    const add = (numOne, numTwo) => numOne + numTwo;
    const subtract = (numOne, numTwo) => numOne - numTwo;

    switch (operator) {
        case "multiply": return console.log(multiply(numOne, numTwo));
        case "add": return console.log(add(numOne, numTwo));
        case "divide": return console.log(divide(numOne, numTwo));
        case "subtract": return console.log(subtract(numOne, numTwo));
    }

}
calc(1,2, 'add');