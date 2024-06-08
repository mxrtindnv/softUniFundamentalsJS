function palindromeIntegers(array) {

    let isPalindrome = false;
    let newNum = "";
    let currentNum;

    const numTransform = function (x) {
        newNum = "";

        for (let a = x.length - 1; a >= 0; a--) {
            newNum += x[a].toString();

        }

        // console.log(newNum);
    }

    const isPalindromeCheck = function (num) {
        if (Number(currentNum) === Number(newNum)) {
            isPalindrome = true
        } else {
            isPalindrome = false
        }

        console.log(isPalindrome);
    }

    for (let i = 0; i < array.length; i++) {
        currentNum = array[i];
        numTransform(currentNum.toString())
        isPalindromeCheck(newNum)



    }








}
palindromeIntegers([32,2,232,1010])