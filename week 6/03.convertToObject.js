function convert(input){

    let text = JSON.parse(input);

    for(let key of Object.entries(text)){
        console.log(`${key[0]}: ${key[1]}`);
    }

}
convert('{"name": "George", "age": 40, "town": "Sofia"}')