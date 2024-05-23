function sumNums(num){

    const newNum = `${num}`;
    let sumOfNumbers = 0;

    for(let i = 0; i < newNum.length; i++){
        let currentNum = Number(newNum[i]);
        sumOfNumbers += currentNum;

    }
        
    console.log(sumOfNumbers);

}
sumNums(245678);