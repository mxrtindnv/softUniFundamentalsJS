function heroRecruit(input){
    let heroHome = {};


    for(let command of input){
        command = command.split(" ");
        if(command[0] === "End"){
            break;
        }else if(command[0] === "Enroll"){
            const hero = command[1];
            if(heroHome.hasOwnProperty(hero) === false){
                
                heroHome[hero] = [];
                
            }else{
                console.log(`${hero} is already enrolled.`);
                
            }
        }else if(command[0] === "Learn"){
            const hero = command[1];
            const spell = command[2];

            if(heroHome.hasOwnProperty(hero) === false){
                console.log(`${hero} doesn't exist.`);
                
            }else if(heroHome[hero].includes(spell)){
                console.log(`${hero} has already learnt ${spell}.`);
                
                
            }else{
                heroHome[hero].push(spell);
                
            }
        }else if(command[0] === "Unlearn"){
            const hero = command[1];
            const spell = command[2];

            if(heroHome.hasOwnProperty(hero) === false){
                console.log(`${hero} doesn't exist.`);
                
            }else if(heroHome[hero].includes(spell) === false){
                console.log(`${hero} doesn't know ${spell}.`);
                   
            }else{
                heroHome[hero] = heroHome[hero].filter(spellName => spellName !== spell);
            }
        }
        
    }

    console.log(`Heroes:`);
    

    for (let [name, spells] of Object.entries(heroHome)) {
        const printRow = `== ${name}: ${spells.join(', ')}`;
        console.log(printRow);
    }
    


}
heroRecruit((["Enroll Stefan",
    "Enroll Peter",
    "Enroll John",
    "Learn Stefan Spell",
    "Learn Peter Dispel",
    "End"]));