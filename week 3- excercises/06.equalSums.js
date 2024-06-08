function equal(array) {

    if(array.length === 1){
        return console.log('0');
    }


    for (let a = 0; a < array.length; a++) {
        let leftSum = 0;
        let rightSum = 0;

        //right Sum calculation
        for (let b = a + 1; b < array.length; b++) {
            rightSum += Number(array[b]);
        }

        for (let i = a; i > 0; i--) {
            leftSum += Number(array[i - 1]);
        }
         
       if(leftSum === rightSum){
          return console.log(a);
       }
        

    }

    console.log('no');









}
equal([1,2,3]);