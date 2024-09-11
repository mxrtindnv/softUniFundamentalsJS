function binary(num){

    num = `${num}`
    let sum = 0;
    let multiplier = 0;
    
    for(let i = 0; i < num.length; i++){
        multiplier = Math.pow(2, 7-i);
        sum += Number(num[i]) * multiplier;
        


    }

    console.log(sum);

 // TODO


}
binary();