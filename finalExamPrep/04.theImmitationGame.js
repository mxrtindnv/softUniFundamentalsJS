function game(input) {

    let secretWord = input.shift();

    for (let command of input) {
        command = command.split("|");
        const action = command[0];

        if (action === "Move") {

            const numLetters = Number(command[1]);
            const cutout = secretWord.substring(0, numLetters);
            secretWord = secretWord.replace(cutout, "");
            secretWord = secretWord + cutout;

        } else if (action === "Insert") {
            const index = Number(command[1]);
            const value = command[2];

            const cutout = secretWord.substring(0, index);
            secretWord = secretWord.replace(cutout, "");
            secretWord = value + secretWord;
            secretWord = cutout + secretWord;


        } else if (action === "ChangeAll") {
            const substring = command[1];
            const replacement = command[2];

            secretWord = secretWord.split(substring).join(replacement);
        } else if (action === "Decode") {
            return console.log(`The decrypted message is: ${secretWord}`);

        }


    }



}
game([

    'zzHe',
  
    'ChangeAll|z|l',
  
    'Insert|2|o',
  
    'Move|3',
  
    'Decode'
  
  ])