function occurence(input) {

    let wordsAppearance = {};
    input = input.split(" ");
    let result = []

    for (let word of input) {
        word = word.toLowerCase()
        if (wordsAppearance.hasOwnProperty(word) === false) {
            result.push(word);
            wordsAppearance[word] = 1;
        } else {
            wordsAppearance[word] += 1;
        }


    }

    let arrResult = [];

    result.forEach(a => {
        if (wordsAppearance[a] % 2 != 0) {

            arrResult.push(a)
        }
    })

    console.log(arrResult.join(" "));




}
occurence('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')