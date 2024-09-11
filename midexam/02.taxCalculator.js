function taxCalculator(input) {
    const array = input[0].split('>>')
    let totalTax = 0;

    for (row of array) {
        row = row.split(' ')
        

        let carType = row[0];
        let years = Number(row[1]);
        let kilometers = Number(row[2]);
        

        let currentTax = 0;

        let taxDecline = 0;
        let taxIncrease = 0;

        switch (carType) {
            case "family":
                taxDecline = years * 5;
                taxIncrease = Math.floor(kilometers / 3000) * 12;

                currentTax = 50;

                currentTax -= taxDecline;
                currentTax += taxIncrease;
                console.log(`A ${carType} car will pay ${currentTax.toFixed(2)} euros in taxes.`);
                totalTax += currentTax;
                break;

            case "heavyDuty":
                taxDecline = years * 8;
                taxIncrease = Math.floor(kilometers / 9000) * 14;
                currentTax = 80;

                currentTax -= taxDecline;
                currentTax += taxIncrease;
                console.log(`A ${carType} car will pay ${currentTax.toFixed(2)} euros in taxes.`);
                totalTax += currentTax;
                break;

            case "sports":
                taxDecline = years * 9;
                taxIncrease = Math.floor(kilometers / 2000) * 18;
                currentTax = 100;

                currentTax -= taxDecline;
                currentTax += taxIncrease;
                console.log(`A ${carType} car will pay ${currentTax.toFixed(2)} euros in taxes.`);
                totalTax += currentTax;
                break;

            default: console.log(`Invalid car type.`);
        }



    }

    console.log(`The National Revenue Agency will collect ${totalTax.toFixed(2)} euros in taxes.`);







}
taxCalculator((['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']))