function firstAndLastKNumbers(array){

    let firstKNumbers = [];
    let lastKNumbers = [];

    const firstKNumbersCalculation = function(input){
        
        firstKNumbers = input.slice(1, 1 + Number(input[0]));
        console.log(firstKNumbers.join(` `));

    }

    const lastKNumbersCalculation = function(input){

        let start = (Number(input.length)) - Number(input[0]);
        
        
        lastKNumbers = input.slice(start, input.length );
        console.log(lastKNumbers.join(` `));

    }

    firstKNumbersCalculation(array)
    lastKNumbersCalculation(array)
   
}
firstAndLastKNumbers([3,

    6, 7, 8, 9, 8]);