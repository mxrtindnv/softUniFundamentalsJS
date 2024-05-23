function books(num1, num2, num3){

    let pageNum = Number(num1);
    let pageHourRate = Number(num2);
    let daysNum = Number(num3);

    let wholeBookTime = pageNum / pageHourRate;
    let final = wholeBookTime / daysNum;
    console.log(final);

}