function dictionary(input){

    let objectArr = [];
    

 for(let row of input){
    row = JSON.parse(row);
    Object.assign(objectArr, row)

 }

 const sortedTerms = Object.keys(objectArr).sort();

 sortedTerms.forEach(term => console.log(`Term: ${term} => Definition: ${objectArr[term]}`))






}
dictionary([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Bus":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])