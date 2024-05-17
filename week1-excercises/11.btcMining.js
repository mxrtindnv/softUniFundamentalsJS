function btc(input){
    let i = 0;
    let row = Number(input[i]);
    let goldPrice = 67.51;
    let btcPrice = 11949.16;
    let net = 0;
    let btcAmount = 0;
    let robbery = 0;
    let days = 1;
    let btcBought = false;
    let btcDayBought = 0;
    while(row > 0){
        robbery++
        if(robbery % 3 === 0){
            row *= 0.7;
        }

     net += row * goldPrice;
     while(net >= btcPrice){
        if(btcAmount === 0){
            btcDayBought = days;
        }
        net -= btcPrice;
        btcAmount += 1;
        
     }
        i++
        row = Number(input[i]);
        days++;

      
        
    }
    console.log(`Bought bitcoins: ${btcAmount}`);
    if(btcAmount > 0){
        console.log(`Day of the first purchased bitcoin: ${btcDayBought}`);
    }
    console.log(`Left money: ${net.toFixed(2)} lv.`);
}

btc([100, 200, 300])