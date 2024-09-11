function games(array){

    const days = Number(array.shift());
    const players = Number(array.shift());
    let energy = Number(array.shift());
    const waterPerDay = Number(array.shift());
    const foodPerDay = Number(array.shift());

    let totalWater = waterPerDay * days * players;
    let totalFood = foodPerDay * players * days;

    let i = 1;

    for(let day of array){
        let currentEnergy = Number(day);

        energy -= currentEnergy;

        if(energy <= 0){
            return console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
        }

        if( i % 2 === 0 && i > 0){
            totalWater = totalWater * 0.7;
            energy = energy * 1.05;
        }

        if( i % 3 === 0 && i > 0 ){
            totalFood -= totalFood / players;
            energy  = energy * 1.1
        }

        i++
    }

    if(energy <= 0){
        return console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }else{
        return console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }
  



    
    
    

    
    







}
games((["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])
);