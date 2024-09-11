function negativeAndPositiveNum(array){

    let result = [];

    for(let i = 0; i < array.length; i++){
        let currentRow = Number(array[i]);
        if(currentRow < 0){
            result.unshift(currentRow);
        }else{
            result.push(currentRow);
        }
    }

    console.log(result.join(`\n`));




}
negativeAndPositiveNum(['7', '-2', '8', '9'])