function reverse(n, array){

    let newArray = '';
    n-=1
    for(let i = n; i >= 0; --i){
        newArray += `${array[i]} `
    }
    console.log(newArray);





}
reverse(2, [10,20,30,40,5])