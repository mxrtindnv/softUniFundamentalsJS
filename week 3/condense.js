function condense(num){
    for(let i = 0; i < num.length; i++){
        num[i] = Number(num[i]);
    }
    while(num.length > 1){
        let condense = [];
        for(let i = 0; i < num.length - 1; i++){
            condense[i] = num[i] + num[i+1];
        }
       
        num = condense;
        condense = 0;

    }

   console.log(num.join(''));








}
condense([2,10,3])