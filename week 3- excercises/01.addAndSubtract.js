function add(array) {

    let newArray = [];

    let sumOfOriginalArray = 0;
    let sumOfNewArray = 0;



    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
        let modifiedNumber = Number(array[i]);

        if (array[i] % 2 === 0) {
            modifiedNumber = array[i] + i;

        } else {
            modifiedNumber = array[i] - i;
        }

        newArray.push(modifiedNumber);
        sumOfOriginalArray += array[i];
        sumOfNewArray += modifiedNumber;

    }

    console.log(newArray);
    console.log(sumOfOriginalArray);
    console.log(sumOfNewArray);








}
add([-5, 11, 3, 0, 2])