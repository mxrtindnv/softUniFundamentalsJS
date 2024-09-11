function prime(num){

    let isPrime = false;

    if(num === 1 || num === 2 || num === 3){

        isPrime = true;
        console.log(isPrime);
    }else if(num % 2 === 0 || num % 3 === 0){
        isPrime = false;
        console.log(isPrime);
    }else{
        isPrime = true;
        console.log(isPrime);
    }



}
prime(81);