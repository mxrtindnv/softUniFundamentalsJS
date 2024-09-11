function bombNumbers(array, numbers){


    const bombNum = numbers[0];
    const power = numbers[1];

    // const bombFront = function(x){

    //     for(let i = 0; i < power; i++){



    //     }

    // }

  
    for(let i = 0; i < array.length; i++){

        let currentNum = array[i];
        
        

        if(currentNum === bombNum){
            array.splice(i, power)
            
            array.splice(i - power, power);
            array.splice(i-1,1)
            
            
            
           
        }

    }

   let arraySum = 0;

   for(let a = 0; a < array.length; a++){
    arraySum+=array[a];
   }
 
   console.log(arraySum);









}
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3])