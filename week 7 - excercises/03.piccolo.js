function piccolo(input){

    let registry = {};

    for(let token of input){
        token = token.split(", ")
        const action = token[0];
        const plate = token[1];
        if(action === "IN"){
            registry[plate] = 1
        }else{
            registry[plate] -= 1;
        }
    }

    let carsInside = [];

    Object.entries(registry).forEach((car) => {

        if(car[1] === 1){
            carsInside.push(car[0])
        }
        
    });

   
    let carsSorted = {};

    carsInside.forEach(car => {
        carsSorted[car] = Number(car.slice(2, 6))
    })
   
    carsSorted = Object.entries(carsSorted).sort((a,b) => a[1]-b[1])
    
    if(carsSorted.length > 0){
        carsSorted.forEach(plate => {
            console.log(plate[0]);
        })
    }else{
        console.log(`Parking Lot is Empty`);
    }



}
piccolo(['IN, CA2844AA',

    'IN, CA1234TA',
    
    'OUT, CA2844AA',
    
    'IN, CA9999TT',
    
    'IN, CA2866HI',
    
    'OUT, CA1234TA',
    
    'IN, CA2844AA',
    
    'OUT, CA2866HI',
    
    'IN, CA9876HH',
    
    'IN, CA2822UU'])