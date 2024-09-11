function wordTracker(input){

    let book = {};

    const sentence = input.shift();
    const words = sentence.split(" ");
    

    for(let line of words){
        book[line] = 0
        for(let token of input){
            if(token === line){
                book[line] += 1
            }
        }
    }

    const sorted = Object.entries(book).sort((a,b) => b[1] - a[1])
    for(let [word, count] of sorted){
        console.log(`${word} - ${count}`);
    }
    
}
wordTracker([

    'is the', 
    
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])