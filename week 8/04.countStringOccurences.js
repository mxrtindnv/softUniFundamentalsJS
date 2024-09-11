function count(text, word){

    text = text.split(" ");
    let counter = 0;
    for(let x of text){
        if(x === word){
            counter++
        }
    }

    console.log(counter);



}
count('This is a word and it also is a sentence', 'is')