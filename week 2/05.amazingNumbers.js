function checker(number){
   const num = `${number}`;
   let sum = 0;
   let isTrue = false;

    for(let i = 0; i < num.length; i++){
        let currentRow = Number(num[i])
        sum += currentRow

    }

    const finalNumber = `${sum}`

    for(let a = 0; a < finalNumber.length; a++){
        if(Number(finalNumber[a]) === 9){
           isTrue = true;
           break;
        } 
    }

    if(isTrue === true){
        console.log(`${number} Amazing? True`);
    }else{
        console.log(`${number} Amazing? False`);
    }
   
   




}
checker(1233)