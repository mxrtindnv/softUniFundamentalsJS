function miner(input){
    let minerBook = {};

    for(let i = 0; i < input.length; i += 2){
        let resource = input[i];
        let quantity = Number(input[i+1]);
        if(minerBook.hasOwnProperty(resource) === false){
            minerBook[resource] = quantity;
        }else{
            minerBook[resource] += quantity;
        }
    }

   Object.entries(minerBook).forEach((key) => {
    console.log(`${key[0]} -> ${key[1]}`);
   })




}
miner([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17',
    'Gold',
    '15'
    
    ]);