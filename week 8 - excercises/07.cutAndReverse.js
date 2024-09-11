function cut(input){

    let string1 = "";
    let string2 = "";

    for(let i = input.length - 1; i >= input.length / 2; i--){
       string2 += input[i]
    }

    for(let i = input.length / 2 - 1; i >= 0 ; i--){
        string1 += input[i]
     }

     console.log(string1);
     console.log(string2);


}
cut('tluciffiDsIsihTgnizamAoSsIsihT')