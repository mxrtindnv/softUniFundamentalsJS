function addyBook(input){

    let assocArr = {};

    for(let line of input){
        line = line.split(':');
        let name = line[0];
        let address = line[1];
        assocArr[name] = address;


    }

   const sortedNames = Object.entries(assocArr).sort();


    for(let [name, address] of sortedNames){

        console.log(`${name} -> ${address}`);

    }



}
addyBook(['Bob:Huxley Rd',

    'John:Milwaukee Crossing',
    
    'Peter:Fordem Ave',
    
    'Bob:Redwing Ave',
    
    'George:Mesta Crossing',
    
    'Ted:Gateway Way',
    
    'Bill:Gateway Way',
    
    'John:Grover Rd',
    
    'Peter:Huxley Rd',
    
    'Jeff:Gateway Way',
    
    'Jeff:Huxley Rd'])