function phoneBook(input) {
    let phonebook1 = {};
    for (let row of input) {
        let tokens = row.split(' ');
        let name = tokens[0];
        let number = tokens[1];
        phonebook1[name] = number;
    }
    for (let [key, value] of Object.entries(phonebook1)) {
        console.log(`${key} -> ${value}`);
        }
}
phoneBook(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344']);