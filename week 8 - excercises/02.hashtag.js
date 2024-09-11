function hashtag(input){
   
    input = input.split(" ");
    for(let word of input){
        if(word.startsWith("#") === true && word.length > 1){
            word = word.replace("#", "")
            if(/^[a-zA-Z]+$/.test(word) === true){
                console.log(word);
            }
  
        }
    }

}
hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia')