function distinct(arr){



    for(let a = 0; a < arr.length; a++){
        let numOne = arr[a];
        
        for(let b = a + 1; b < arr.length; b++){
            let numTwo = arr[b];
            if(numOne === numTwo){
                arr.splice(b, 1);
                a = 0;
            }
        }

        
    }


    console.log(arr.join(` `));


    // const set = new Set(arr);

    

    // console.log(Array.from(set).join(` `));






}
distinct([20, 8, 12, 13, 4,

    4, 8, 5])