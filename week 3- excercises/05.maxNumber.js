function topInteger(array){
  let condensed = [];

    for(let i = 0; i < array.length; i++){
        let counter = 0;
        array[i] = Number(array[i]);

        for(let a = i + 1; a < array.length; a++){
            if(Number(array[i]) > Number(array[a])){
                counter++;

            }
        }

        if(counter + i + 1 === array.length){
            condensed.push(array[i]);
        }



       

    }

    console.log(condensed.join(' '));










}
topInteger([27, 19, 42, 2, 13, 45, 48]);