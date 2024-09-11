function replace(input){

    let printWord = "";

    for(let i = 0; i < input.length; i++){
        const currentLetter = input[i];
        printWord += currentLetter;
        if(input[i+1] === currentLetter){
            while(input[i+1] === currentLetter){
                i++
            }
        }
    }

    console.log(printWord);


}
replace('aaaaabbbbbcdddeeeedssaa')