function addAndSubtract(numOne, numTwo, numThree) {

    const sum = (numOne, numTwo) => Number(numOne + numTwo);
    const sumOfNumbers = sum(numOne, numTwo);
    const subtract = (sum, numThree) => Number(sum - numThree);

    return console.log(subtract(sumOfNumbers, numThree));








}
addAndSubtract(23, 6, 10);