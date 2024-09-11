function muGame(input){

    const rooms = input.split("|")
    let health = 100;
    let bitcoins = 0;
    let currentRoom = 0;

    for(let stage of rooms){
        currentRoom ++;

        let roomElements = stage.split(' ')
        let item = roomElements[0];
        let number = Number(roomElements[1]);

        if(item === "potion"){
            if(health + number <= 100){
                health += number;
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${health} hp.`);
            }else{
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
                console.log(`Current health: ${health} hp.`);
            }
        }else if(item === "chest"){
            console.log(`You found ${number} bitcoins.`);
            bitcoins += number;
        }else{
            health -= number;

            if(health > 0){
                console.log(`You slayed ${item}.`);
            }else{
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${currentRoom}`);
                return;
            }
        }
        







    }

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
 










}
muGame("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")