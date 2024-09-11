function searchNumber(input, instructions){

    let arraySize = instructions[0];
    let deleteNum = instructions[1];
    let numToBeFound = instructions[2];
    
    

    const shortenInput = function(){

        for(let i = input.length; i > arraySize; i-- ){
            input.pop()
        }

    }

    shortenInput();

    const deleteNums = function (){
        input.splice(0, deleteNum)
    }

    deleteNums();

    let timesItemIsFound = 0;
 

    const findItem = function(){

        for(let i = 0; i < input.length; i++){
            if(input[i] === numToBeFound){

                timesItemIsFound += 1;

            }
        }

    }

    findItem();


    console.log(`Number ${numToBeFound} occurs ${timesItemIsFound} times.`);







}
searchNumber([5, 2, 3, 4, 1, 6],

    [5, 2, 3])