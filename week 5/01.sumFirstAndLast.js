function sumFirstAndLastNum(array){

    const sumNumbers =  (a,b) => Number(a) + Number(b)

    console.log(sumNumbers(array[0], array[array.length - 1]));




}
sumFirstAndLastNum(['5','4','11'])