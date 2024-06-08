function subtract(array){
   let evenSum = 0;
   let oddSum = 0;

   for(let n of array){
      if(n % 2 === 0){
         evenSum += n;
      }else{
         oddSum += n;
      }
   }

   console.log(evenSum - oddSum);






}
subtract([1,2,3,4,5,6])
