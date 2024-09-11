function adAstra(input) {
    const regEx = /(#|\|)(?<itemName>[A-Za-z ]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;

    let match = regEx.exec(input);
    let sum = 0;

    while (match) {
        const {itemName, expirationDate, calories} = match.groups;
        sum += Number(calories);

        match = regEx.exec(input);
    }

    console.log(`You have food to last you for: ${Math.floor(sum / 2000)} days!`);

    let match2 = regEx.exec(input);

    while (match2) {
        const {itemName, expirationDate, calories} = match2.groups;
        console.log(`Item: ${itemName}, Best before: ${expirationDate}, Nutrition: ${calories}`);

        match2 = regEx.exec(input);
    }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);