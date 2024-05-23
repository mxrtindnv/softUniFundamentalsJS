function checkRightPlace(missingCharWord, charNeeded, matchingWord){
    
  let newWord = '';
    
    
    for(let i = 0; i < missingCharWord.length; i++){
        let currentChar = missingCharWord[i];
        if(currentChar === "_"){
            newWord += `${charNeeded}`
         continue;
        }else{
            newWord += currentChar;
        }
        
    }

    if(newWord === matchingWord){
        console.log(`Matched`);
    }else{
        console.log("Not Matched");
    }

    
      



}
checkRightPlace('Str_ng', 'I',

'Strong')