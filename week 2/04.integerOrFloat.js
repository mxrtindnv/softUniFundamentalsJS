function checking(num1, num2, num3){

    const sum = num1 + num2 + num3;

    if(sum % 1 == 0){
        console.log(`${sum} - Integer`);
    }else{
        console.log(`${sum} - Float`);
    }




}
checking(9, 100, 1.1);