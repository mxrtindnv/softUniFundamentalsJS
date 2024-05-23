function spiceYeild(yield){

    let daysWorked = 0;
    let totalSpices = 0;

    while(yield >= 100){
        totalSpices += yield;
        yield -= 10;
        daysWorked += 1;
        totalSpices -= 26;
    }
  
    totalSpices -= 26;

    if(totalSpices < 0){
        totalSpices = 0
    }
    console.log(daysWorked);
    console.log(totalSpices);

}
spiceYeild(99);