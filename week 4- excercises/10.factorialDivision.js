function factorialDivision(num1, num2){

    let numOneFactorial = 1;
    let numTwoFactorial = 1;

    const numOneFactorialCalculation = function (input){
        for(let i = 1; i <= input; i++){
            numOneFactorial *= i;
        }
    }

    const numTwoFactorialCalculation = function(input){
        for(let i = 1; i <= input; i++){
            numTwoFactorial *= i;
        }
    }

    numOneFactorialCalculation(num1);
    numTwoFactorialCalculation(num2);

    const result = (numOneFactorial / numTwoFactorial).toFixed(2)
   
    console.log(result);






}
factorialDivision(6,2)