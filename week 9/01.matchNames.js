function matchNames(input){

    let regexp = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let validNames = []

    while((validName = regexp.exec(input)) !== null){
        validNames.push(validName[0]);
        console.log(validName);
    }

    console.log(validNames.join(" "));



}
matchNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")