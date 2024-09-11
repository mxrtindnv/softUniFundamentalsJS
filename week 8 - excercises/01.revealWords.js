function revealer(words, text){
    words = words.split(", ")
    for(let line of words){
        text = text.replace("*".repeat(line.length), line)
    }

    console.log(text);


}
revealer('great, learning','softuni is ***** place for ******** new programming languages')