function equal(array1, array2){
    
    let sum = 0;

    for(let x = 0; x < array1.length ; x++){
        let a = Number(array1[x])

        if(array1[x] != array2[x]){
            return console.log(`Arrays are not identical. Found difference at ${x} index`);
            
        }else{
            sum += a;
        }


    }

    console.log(`Arrays are identical. Sum: ${sum}`);








}
equal(['1'], ['10']);