function rotate(array, rotations) {

    let condensed = [];

    for (let i = 0; i < rotations; i++) {
        array.push(array[i])

    }

    for (let a = rotations; a < array.length; a++) {
        condensed.push(array[a]);

    }



    console.log(condensed.join(' '));








}
rotate([32, 21, 61, 1], 4)