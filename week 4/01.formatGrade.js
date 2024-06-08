function grade(x){
   
    if(x < 3.00){
        console.log(`Fail (${x})`);
    }else if(x >= 3 && x < 3.5){
        console.log(`Poor (${x.toFixed(2)})`);
    }else if(x >= 3.5 && x < 4.5){
        console.log(`Good (${x.toFixed(2)})`);
    }else if(x >= 4.50 && x < 5.5){
        console.log(`Very good (${x.toFixed(2)})`);
    }else{
        console.log(`Excellent (${x.toFixed(2)})`);
    }


}
grade(5.5)