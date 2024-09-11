function biggest(a,b,c){

    if(a > b && a > c){
        console.log(a);
    }else if(b > a && b > c){
        console.log(b);
    }else if(c > a && c > b){
        console.log(c);
    }else if(a === b && b === c){
        console.log(a);
    }else if(a === b && a > c ){
        console.log(a);
    }else if(a === c && a > b){
        console.log(a);
    }else if(c === b && c > a){
        console.log(c);
    }




}
biggest(4,5,5);