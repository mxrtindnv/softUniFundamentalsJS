function smallestInteger(numOne, numTwo, numThree) {

    let smallestNum;
    if (numOne < numTwo && numOne < numThree) {
        smallestNum = numOne;
    } else if (numTwo < numOne && numTwo < numThree) {
        smallestNum = numTwo;
    } else {
        smallestNum = numThree;
    }



    console.log(smallestNum);









}
smallestInteger(2, 5, 3)