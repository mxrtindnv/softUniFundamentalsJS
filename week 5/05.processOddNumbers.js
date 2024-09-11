function processOddNumbers(array){

    const newArray = array.filter((_,index) => index % 2 !== 0);
    let printArray = [];
    for(let i = newArray.length - 1; i >= 0; i--){
     printArray.push(newArray[i] * 2)
    }
    console.log(printArray.join(` `));
    








}
processOddNumbers([3, 0, 10, 4, 7, 3]);