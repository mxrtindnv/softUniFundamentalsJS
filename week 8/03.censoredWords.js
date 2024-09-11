function censory(sentence, word){
    
    let censoredWord = "*".repeat(word.length);
    while(sentence.includes(word)){
        sentence = sentence.replace(word, censoredWord);
    }

    console.log(sentence);



}
censory('Find the hidden word', 'hidden')