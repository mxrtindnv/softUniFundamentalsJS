function employees(input){
    
    for(let person of input){
        let nameLength = person.length;
        let identity = {
            name: person,
            number: nameLength,
            print () {
                console.log(`Name: ${this.name} -- Personal Number: ${this.number}`);
            }
        }
   
        identity.print();
        

    }

}
employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])