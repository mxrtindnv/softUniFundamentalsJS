function arrayManipulation(input){

 let commands = input
 .shift()
 .split(' ')
 .map(Number);

 const remove = function(a){

    commands = commands.filter(x => x !== a);

 }

 for (let x of input) {

    

    let [command, firstNum, secondNum] 
        = x.split(' ');

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    
    switch(command){
        case "Add": commands.push(firstNum); break;
            case "Remove": remove(firstNum); break;
                case "RemoveAt": commands.splice(firstNum , 1) ; break;
                     case "Insert":  commands.splice(secondNum, 0, firstNum); break;
    }
    
 }

  
 console.log(commands.join(` `));




}
arrayManipulation(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2']);