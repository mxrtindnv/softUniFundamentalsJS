function galactic(input){

    let codedWord = input.shift();

    for(let command of input){
        command = command.split(" ");
        
        if(command[0] === "Encrypt"){
            
            codedWord = codedWord.split('').reverse().join('');
            console.log(codedWord);
            
        }else if(command[0] === "Decrypt"){
            let tempWord = "";
            for(let char of codedWord){
                if(char === char.toLowerCase()){
                    char = char.toUpperCase();
                }else{
                    char = char.toLowerCase();
                }
                tempWord += char;
            }

            codedWord = tempWord;
            console.log(codedWord);
            
        }else if(command[0] === "Substitute"){
            const oldChar = command[1];
            const newChar = command[2];
            let tempWord = codedWord;

            codedWord = codedWord.replace(new RegExp(oldChar, 'g'), newChar);

            if(tempWord !== codedWord){
                console.log(codedWord);
                
            }else{
                console.log(`Character not found.`);
                
            }
        }else if(command[0] === "Scramble"){
            const index = Number(command[1]);
            const char = command[2];

            if(index >= codedWord.length || index < 0){
                console.log(`Index out of bounds.`);
                
            }else{
                codedWord = codedWord.slice(0, index) + char + codedWord.slice(index + 1);
                console.log(codedWord);
                
            }
        }else if(command[0] === "Remove"){
            const substring = command[1];
            codedWord = codedWord.replace(new RegExp(substring, 'g'), "");
            console.log(codedWord);
            
        }else if(command[0] != "Finalize"){
            console.log(`Invalid command detected!`);
            
        }
        
    }




}
galactic((["GalacticMission",
    "Decrypt",
    "Scramble 5 Z",
    "Nigga S",
    "Substitute G X",
    "Encrypt",
    "Finalize"]));