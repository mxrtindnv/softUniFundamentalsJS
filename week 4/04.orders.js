function coffeeShop(product, amount) {

    const waterPrice = 1.00;
    const coffeePrice = 1.50;
    const cokePrice = 1.40;
    const snacksPrice = 2.00;

    switch (product) {
        case "water": console.log((waterPrice * amount).toFixed(2)); break;
        case "coffee": console.log((coffeePrice * amount).toFixed(2)); break;
        case "coke": console.log((cokePrice * amount).toFixed(2)); break;
        case "snacks": console.log((snacksPrice * amount).toFixed(2)); break;
    }




}
coffeeShop("water", 5)