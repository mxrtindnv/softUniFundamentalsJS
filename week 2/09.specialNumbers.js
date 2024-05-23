function specialNumbers(number){
    let numbersSum = 0;
    for(let i = 1; i <= number; i++){
        numbersSum = 0;
        let currentRow = `${i}`
        for(let a = 0; a < currentRow.length; a++){
            numbersSum+= Number(currentRow[a]);
            
        }

        if(numbersSum === 5 || numbersSum === 7 || numbersSum === 11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
    }



}
specialNumbers(15);