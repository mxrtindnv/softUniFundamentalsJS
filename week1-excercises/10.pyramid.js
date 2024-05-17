function pyramid(width, multi){
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;
    let lapisCounter = 0;
    let i = 0;

    for(i = width; i > 2; i -= 2){
        height++
        lapisCounter++
        if(lapisCounter % 5 === 0){
            stone += (i-2) * (width - 2);
            lapis += (i * width) - ((i-2) * (width - 2));

        }else{

                
        stone += (i-2) * (width - 2)
        marble += (i * width) - ((i-2) * (width - 2));
        }
        width -= 2;
        
    }
    height++
    gold = (i) * (width );
    
    
    console.log(`Stone required: ${Math.ceil(stone * multi)}`);
    console.log(`Marble required: ${Math.ceil(marble * multi)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * multi)}`);
    console.log(`Gold required: ${Math.ceil( gold * multi )}`);
    console.log(`Final pyramid height: ${Math.floor(height * multi)}`)

    
}

pyramid(11, 0.75)