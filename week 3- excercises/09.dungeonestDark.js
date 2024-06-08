function game(input) {
    const roomString = input[0];
    const rooms = roomString.split("|")
    let health = 100;
    let coins = 0;
    let roomNumber = 0;


    for (const room of rooms) {
        roomNumber ++;
        const roomElements = room.split(" ")
        const item = roomElements[0];
        const num = Number(roomElements[1]);
        if (item === "potion") {
            if (health + num <= 100) {
                health += num;
                console.log(`You healed for ${num} hp.`);
                console.log(`Current health: ${health} hp.`);

            } else {
                
                console.log(`You healed for ${100-health} hp.`);
                health = 100;
                console.log(`Current health: ${health} hp.`);
            }

        } else if (item === "chest") {
            coins += num;
            console.log(`You found ${num} coins.`);

        } else {
            health -= num;
            if(health > 0){
                console.log(`You slayed ${item}.`);
            }else{
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${roomNumber}`)
                return;
            }

        }

    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);



}
game(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])