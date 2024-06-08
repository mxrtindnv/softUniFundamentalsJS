function summ(n){
    let sum = 0;

    for(let i = 0; i < n.length; i++){
        if(Number(n[i]) % 2 === 0){
            sum += Number(n[i])

        }
    }
 
    console.log(sum);



}
summ(['1','2','3','4','5','6']);