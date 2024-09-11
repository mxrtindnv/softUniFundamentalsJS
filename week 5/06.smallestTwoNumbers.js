function smallest(array){

    const newArray = array.sort((a,b) => a - b);
    const printArray = newArray.slice(0,2)
    console.log(printArray.join(` `));




}
smallest([30, 15, 50, 5]);