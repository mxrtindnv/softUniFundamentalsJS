function guineaPig(array){

    array.map(Number);
    let food = array[0] * 1000;
    let hay = array[1] * 1000;
    let cover = array[2] * 1000;
    let weight = array[3] * 1000;

    for(let i = 1; i <= 30; i++){
        food -= 300;

        if(i % 2 === 0){
            hay -= food * 0.05;
        }

        if(i % 3 === 0){
            cover -= weight / 3
        }

        
    }

    if(food <= 0 || hay <= 0 || cover <= 0){
        return console.log(`Merry must go to the pet store!`);
    }else{
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    }


   








}
guineaPig((["9",

"5",

"5.2",

"1"]));