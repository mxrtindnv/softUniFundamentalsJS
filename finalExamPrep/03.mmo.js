function mmoGame(input){

    const nHeroes = Number(input.shift());
    let heroes = {};

    for(let i = 0; i <= nHeroes - 1; i++){
        const line = input[i].split(" ");
        const hero = line[0];
        let hp = Number(line[1]);
        let mp = Number(line[2]);
        heroes[hero] = {hp, mp};
      
    }

    for(let a = 0; a < nHeroes; a++){
        input.shift();
    }

    for(let line of input){
        line = line.split(" - ");
        const action = line[0];
        if(action === "CastSpell"){
            const hero = line[1];
            const mpNeeded = Number(line[2]);
            const spellName = line[3];
            if(heroes[hero].mp >= mpNeeded){
                heroes[hero].mp -= mpNeeded;
                console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].mp} MP!`);
                
                
            }else{
                console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                
            }
        }else if(action === "TakeDamage"){

            const hero = line[1];
            const damage = Number(line[2]);
            const attacker = line[3];

            heroes[hero].hp -= damage;
            
            

            if(heroes[hero].hp > 0){
                console.log(`${hero} was hit for ${damage} HP by ${attacker} and now has ${heroes[hero].hp} HP left!`);
                
            }else{
                console.log(`${hero} has been killed by ${attacker}!`);
                
            }
            
        }else if(action === "Recharge"){
            const hero = line[1];
            const amount = Number(line[2]);

            if(heroes[hero].mp + amount > 200){
                console.log(`${hero} recharged for ${200 - heroes[hero].mp} MP!`);
                heroes[hero].mp = 200;
                
            }else{
                console.log(`${hero} recharged for ${amount} MP!`);
                heroes[hero].mp += amount;
            }
        }else if(action === "Heal"){

            const hero = line[1];
            const amount = Number(line[2]);

            if(heroes[hero].hp + amount > 100){
                console.log(`${hero} healed for ${100 - heroes[hero].hp} HP!`);
                heroes[hero].hp = 100;
                
            }else{
                console.log(`${hero} healed for ${amount} HP!`);
                heroes[hero].hp += amount;
            }

        }
    }

    let heroesLeft = Object.entries(heroes);
    for(let row of heroesLeft){
        let name = row[0];
        let points = row[1]
        if(points.hp > 0){
            console.log(name);
            console.log(`  HP: ${points.hp}`);
            console.log(`  MP: ${points.mp}`);
            
            
        }
        
        
        
        
    }
            
    
    


    



}
mmoGame([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);