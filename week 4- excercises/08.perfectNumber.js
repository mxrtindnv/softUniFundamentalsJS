function perfectNumber(num){
    let numberSum = 0;

    for(let i = 1; i < num; i++){
        if(num % i === 0){
            numberSum += i;
        }
    }

    if(numberSum === num){
        console.log(`We have a perfect number!`);
    }else{
        console.log(`It's not so perfect.`);
    }







}
perfectNumber(1236498);