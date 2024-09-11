function stringSubstring(word, sentence){
    sentence = sentence.split(" ");
    word = word.toLowerCase();
    for(let row of sentence){
        row = row.toLowerCase();

        if(row === word){
            console.log(word);
             return;
        }
    }

    console.log(`${word} not found!`);

}
stringSubstring('JavaScript',

'JavaScript is the best programming language')