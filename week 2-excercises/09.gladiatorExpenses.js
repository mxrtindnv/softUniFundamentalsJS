function gladiator(fightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice){

    let swordBreakCount = 0;
    let helmetBreakCount = 0;
    let shieldBreakCount = 0;
    let armorBreakCount = 0;

    for(let i = 1   ; i <= fightsCount; i++){
        if(i % 2 === 0){
            helmetBreakCount++;
        }

        if(i % 3 === 0){
            swordBreakCount++;
        }

        if(i % 2 === 0 && i % 3 === 0){
            shieldBreakCount++;
        }

       if(i % 6 === 0 && shieldBreakCount % 2 === 0){
        armorBreakCount++
       }
    }
         
     console.log(`Gladiator expenses: ${((swordBreakCount * swordPrice) + (shieldBreakCount * shieldPrice) + (helmetBreakCount * helmetPrice) + (armorBreakCount * armorPrice)).toFixed(2)} aureus`);


}
gladiator(23,

    12.50,
    
    21.50,
    
    40,
    
    200);