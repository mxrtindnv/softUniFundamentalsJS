function rev(arr){

    const midInt = Math.floor(arr.length / 2);
    for(let i = 0; i < midInt; i++){
       const j = arr.length - 1 - i;

       const temp = arr[i];
       arr[i] = arr[j]
       arr[j] = temp
      
    }
  
    console.log(arr.join(' '));





}
rev(["a",'b','c','d','e']);