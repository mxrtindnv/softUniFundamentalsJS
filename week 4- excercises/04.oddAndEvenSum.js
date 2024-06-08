function sumOddAndEven(num) {

    function oddOrEven(x) {
        if (x % 2 === 0) {
            evenSum += x
        } else {
            oddSum += x
        }
    }

    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < num.toString().length; i++) {
        let currentNum = Number(num.toString()[i]);
        oddOrEven(currentNum);
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);












}
sumOddAndEven(1000435)