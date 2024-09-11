function storage(input){

    let storageBox = {};

    for(let line of input){
        line = line.split(" ");
        let product = line[0];
        let amount = Number(line[1]);
        if(storageBox.hasOwnProperty(product) === false){
            storageBox[product] = amount;
        }else{
            storageBox[product] += amount;
            
        }
    }

  for(let key in storageBox){
    console.log(`${key} -> ${storageBox[key]}`);
  }



}
storage(['tomatoes 10',

    'coffee 5',
    
    'olives 100',
    
    'coffee 40'])