function magic(array, Sum) {

    let condensed = [];

    for (let a = 0; a < array.length; a++) {
        condensed = [];

        for(let b = a + 1; b < array.length; b++){
            if(Number(array[a]) === Number(array[b])){
                continue;
            }
            if (Number(array[a]) + Number(array[b]) === Sum) {

                condensed.push(Number(array[a]));
                condensed.push(Number(array[b]));
                console.log(condensed.join(" "));
    
    
            }
        }


    }









}
magic([2,2,2,2,2,4,5,6],

   4 );