function phoneNumbers(input){

    let pattern = /(?<=^|\s)\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let validNumbers = [];
    
    while((validPhone = pattern.exec(input)) !== null){
        validNumbers.push(validPhone[0]);
        console.log(validPhone);
    }

    console.log(validNumbers.join(", "));


}
phoneNumbers("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")