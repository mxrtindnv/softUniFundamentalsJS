function wordOccurence(input){

    let dictionary = {};

    for(let word of input){
        
        if(dictionary.hasOwnProperty(word) === false){
            dictionary[word] = 1;
        }else{
            dictionary[word] += 1;
        }
    }

    let sorted = Object.entries(dictionary).sort((a,b) => b[1] - a[1])
    for(let [word,times] of sorted){
        console.log(`${word} -> ${times} times`);
      
    }




}
wordOccurence(["Here", "is", "the", "first", "sentence",

    "Here", "is", "another", "sentence", "And",
    
    "finally", "the", "third", "sentence"])