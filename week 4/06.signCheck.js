function resultCheck(numOne, numTwo, numThree){

    let negativeNums = 0;
    
    const numArray = [numOne, numTwo, numThree];

    for(let i = 0; i < numArray.length; i++){
        let currentNum = Number(numArray[i]);

        if(currentNum < 0){
            negativeNums ++;
        }
    }

    if(negativeNums === 1 || negativeNums === 3){
        return console.log(`Negative`);
    }else{
        return console.log(`Positive`);
    }






}
resultCheck(-5, -12, 15)