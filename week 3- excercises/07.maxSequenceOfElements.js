function sequence(array) {
    let condensed = [];
    let equalCondensed = [];
    let counter = 1;


    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i - 1] || array[i] === array[i + 1]) {
            condensed.push(array[i]);
        }
    }

    for (let a = 0; a < condensed.length; a++) {

        if (condensed[a] === condensed[a + 1]) {
            counter++
        } else {
            equalCondensed.push(counter);
            counter = 1;
        }


    }

    let maxSequence = Number(equalCondensed[0]);
    for (let b = 1; b < equalCondensed.length; b++) {
        if (Number(equalCondensed[b]) > maxSequence) {
            maxSequence = equalCondensed[b];
        }

    }

    let currentRow = 0;
    let indexForSequence = 0;
    let c = 0;
    while (currentRow != maxSequence) {
        currentRow = Number(equalCondensed[c])
        indexForSequence += Number(equalCondensed[c])
        c++

    }

    indexForSequence -= maxSequence
    currentRow = Number(equalCondensed[indexForSequence]);
    let printCondensed = [];
    for (let d = indexForSequence; d < condensed.length; d++) {
        if (Number(condensed[d]) !== Number(condensed[indexForSequence])) {
            break;
        }
        currentRow = Number(condensed[d]);
        printCondensed.push(currentRow);

    }
    //  console.log(indexForSequence);



    //  console.log(maxSequence);


    // console.log(condensed);
    // console.log(equalCondensed);

    console.log(printCondensed.join(" "));

    // const printSequence = 





}
sequence([0, 1, 1, 5, 2, 2, 6, 3, 3])