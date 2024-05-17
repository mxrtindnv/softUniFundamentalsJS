function round(a,b){
    if(b > 15){
        b = 15;
    }

    
    console.log(parseFloat(a.toFixed(b)));
}

round(10.5, 3)