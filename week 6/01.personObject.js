// function personInfo(firstName, lastName, age){

//     let obj = {
//         firstName,
//         lastName,
//         age,

//     }

//     let objectArr = Object.entries(obj);

//     for(let key of objectArr){
//         console.log(`${key[0]}: ${key[1]}`);
//     }





// }
function personInfo(fn, ln, age) {
    const person = {
        firstName: fn,
        lastName: ln,
        age: age,
    }

    return person;
}
personInfo("Peter",

"Pan",

"20")