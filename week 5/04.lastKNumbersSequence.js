function lastKNumbersSequence(n, k){
    let result = [1];
    
    for(let i = 1; i < n; i++){
        let currentNum = result.slice(-k);
        let sum = 0;
        for(let num of currentNum){
            sum += num;
        }
        result.push(sum);
        

    }

    console.log(result.join(` `));


    
   
}
lastKNumbersSequence(6,3);