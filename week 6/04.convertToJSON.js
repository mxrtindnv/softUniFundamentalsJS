function convert(fn, ln, hc){
    let output = {
        name: fn,
        lastName: ln,
        hairColor: hc
    };

    console.log(JSON.stringify(output));

    



}
convert('George', 'Jones','Brown')