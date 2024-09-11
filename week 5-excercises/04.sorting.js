function sort(input){

    input.map(Number)


    input = input.sort((a,b) => b - a)

    let smallNumArray = [];

    let num = 1;

    
    for(let i = input.length - 1; i > input.length / 2 ; i--){
        smallNumArray.push(input[i]);
        
    }

    const arrayCut = input.length - 1
    

    for(let a = arrayCut; a > arrayCut / 2 + 1 ; a--){
        input.pop()
    }

    for(let b = 0; b < smallNumArray.length; b++){

        input.splice(num, 0, smallNumArray[b]);
        num += 2
  
    }

    // function solve(input){
    //     let result = [];
    //     array = input.sort((a, b) => a - b);
    //     while(array.length !== 0){
    //       result.push(array[array.length-1]) && array.pop();
    //       result.push(array[0]) && array.shift();
    //     }
    //  console.log(result.join(' '));
    //  }
  
      




    console.log(input.join(` `));




}
sort([34, 2, 32, 45, 690, 6, 32,

    7, 19, 47])