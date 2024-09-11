function company(input){
    let comp = new Set();
    for(let row of input){
        comp.add(row);
    }

    let companyBook = {};

    for(let line of comp){
        line = line.split(" -> ");
        let company = line[0];
        let id = line[1]
        if(companyBook.hasOwnProperty(company) === false){
            companyBook[company] = id;
        }else{
            companyBook[company] += `|${id}`;
        }
    }

    let newBook = {}

     Object.entries(companyBook).forEach((name) => {
        
        let companyName = name[0];
        let idS = name[1];
        idS = idS.split("|");
        newBook[companyName] = idS
    })
    const sorted = Object.entries(newBook).sort();
     for(let token of sorted){
       let compName = token.shift();
       console.log(compName);
       let array = token[0]

        for(let id of array){
            console.log(`-- ${id}`);
        }
     }
   

}
company([

    'SoftUni -> AA12345',
    
    'SoftUni -> BB12345',
    
    'Microsoft -> CC12345',
    
    'HP -> BB12345'
    
    ])