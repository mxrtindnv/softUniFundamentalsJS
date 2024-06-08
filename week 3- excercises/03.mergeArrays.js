function merge(array1, array2) {
    let condensed = [];

    for (let i = 0; i < array1.length; i++) {
        if (i % 2 === 0) {
            condensed.push(Number(array1[i]) + Number(array2[i]));
        } else {
            let pushed = `${array1[i]}${array2[i]}`
            condensed.push(pushed)
        }
    }


    console.log(condensed.join(" - "));







}
merge(['5', '15', '23', '56', '35'],

    ['17', '22', '87', '36', '11'])