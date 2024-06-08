function charactersInRange(char1, char2) {
    const code1 = char1.charCodeAt();
    const code2 = char2.charCodeAt();

    let printLine = [];
    const startCode = Math.min(code1, code2);
    const endCode = Math.max(code1, code2)


    for (let i = startCode + 1; i < endCode; i++) {
        let currentChar = String.fromCharCode(i);
        printLine.push(currentChar)

    }




    console.log(printLine.join(" "));






}
charactersInRange('a','d')
