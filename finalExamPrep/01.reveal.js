function secretChat(input) {

    let word = input.shift();

    for (let line of input) {
        line = line.split(":|:");
        let action = line[0];

        if (action === "Reveal") {
            return console.log(`You have a new text message: ${word}`);

        } else if (action === "InsertSpace") {

            let index = Number(line[1]);
            
            let cutout = word.substring(0, index);

            word = word.replace(cutout, " ");

            cutout += word;

            word = cutout;

            console.log(word);
            

            
            


        }else if(action === "Reverse"){
            let substring = line[1];
            if(word.includes(substring) === true){
               word =  word.replace(substring, "");
                substring = substring.split("").reverse().join("");
                word = word + substring;

                console.log(word);
                
                
                
            }else{
                console.log('error');
                
            }
        }else{

            let substring = line[1];
            let replacement = line[2];

            if(word.includes(substring) === true){
               
                
                word = word.replace(new RegExp(substring, 'g'), replacement);
              console.log(word);
                
            }

        }


    }



}
secretChat([

    'heVVodar!gniV',

    'ChangeAll:|:V:|:l',

    'Reverse:|:!gnil',

    'InsertSpace:|:5',

    'Reveal'

])

secretChat([

    'Hiware?uiy',
  
    'ChangeAll:|:i:|:o',
  
    'Reverse:|:?uoy',
  
    'Reverse:|:jd',
  
    'InsertSpace:|:3',
  
    'InsertSpace:|:7',
  
    'Reveal'
  
  ]);