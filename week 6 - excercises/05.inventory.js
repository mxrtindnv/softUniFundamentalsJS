function inventory(input){

    let heroes = [];

    class Hero {
        constructor(name, level, items){
            this.name = name,
            this.level = level,
            this.items = items
            
        }
    }

    for(let row of input){
        const [name, level, time] = row.split(" / ");

        Number(level);

        let curHero = new Hero(name, level, time);

        heroes.push(curHero)
        
    }

    heroes.sort((obj, obj1) => obj.level - obj1.level);
    for(let i = 0; i < heroes.length; i++){
        let thisHero = heroes[i];
        console.log(`Hero: ${thisHero.name}`);
        console.log(`level => ${thisHero.level}`);
        console.log(`items => ${thisHero.items}`);
        

    }
    

}
inventory([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ]);