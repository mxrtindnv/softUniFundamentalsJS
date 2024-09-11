function city(obj){

    const objArr = Object.entries(obj);

    for(let key of objArr){
        console.log(`${key[0]} -> ${key[1]}`);
    }





}
city({

    name: "Plovdiv",
    
    area: 389,
    
    population: 1162358,
    
    country: "Bulgaria",
    
    postCode: "4000"
    
    })