function loadingBar(percentage){

    if(percentage === 100){
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
        return;
    }

    let result = "["

    for(let i = 0; i < percentage; i+= 10){
        result += '%'


 
    }

    while(result.length < 11){
        result += "."
    }
   
    result += "]"


    console.log(`${percentage}% ${result}`);
    console.log(`Still loading...`);






}
loadingBar(100);