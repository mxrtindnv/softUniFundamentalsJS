function timer(num){
    let total = 0;
    let i = 1;
    while(num >= 1){
       console.log(i);
       total += i;
       i+= 2;
       num--

    }

    console.log(`Sum: ${total}`);
}

timer(5);