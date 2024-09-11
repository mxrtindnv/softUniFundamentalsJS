function piratesFight(input) {

    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    const maxHealth = Number(input.shift());


   





    for (stage of input) {
        stage = stage.split(' ')
        let command = stage[0];


        if (command === "Fire") {
            let index = Number(stage[1]);
            let damage = Number(stage[2]);
            if (warShip[index] === undefined) {
                continue;
            } else {
                warShip[index] -= damage;
                if (warShip[index] <= 0) {
                    return console.log(`You won! The enemy ship has sunken.`);
                }
            }


        } else if (command === "Defend") {
            let startIndex = Number(stage[1]);
            let endIndex = Number(stage[2]);
            let damage = Number(stage[3]);

            if (pirateShip[startIndex] === undefined || pirateShip[endIndex] === undefined) {
                continue;
            } else {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <= 0) {
                        return console.log(`You lost! The pirate ship has sunken.`);
                    }
                }
            }
        } else if (command === "Repair") {
            let index = Number(stage[1]);
            let health = Number(stage[2]);

            if (pirateShip[index] === undefined) {
                continue;
            } else {

                if (health + pirateShip[index] >= maxHealth) {
                    pirateShip[index] = maxHealth;
                } else {
                    pirateShip[index] += health;
                }


            }
        } else if (command === "Status") {
            let sectionsForRepair = 0;
            for (let i = 0; i < pirateShip.length; i++) {
                let currentNum = pirateShip[i];
                if (currentNum < maxHealth / 5) {
                    sectionsForRepair++
                }
            }

            if (sectionsForRepair > 0) {
                console.log(`${sectionsForRepair} sections need repair.`);
            }


        } else if (command === "Retire") {
            let pirateSum = 0;
            let warSum = 0;

            for (let a = 0; a < pirateShip.length; a++) {
                let currentNum = pirateShip[a];
                pirateSum += currentNum;
            }

            for (let b = 0; b < warShip.length; b++) {
                let currentNum = warShip[b];
                warSum += currentNum;
            }


            console.log(`Pirate ship status: ${pirateSum}`);
            console.log(`Warship status: ${warSum}`);

        }



    }


}

piratesFight((["2>3>4>5>2",

    "6>7>8>9>10>11",

    "20",

    "Status",

    "Fire 2 3",

    "Defend 0 4 11",

    "Repair 3 18",

    "Retire"]))