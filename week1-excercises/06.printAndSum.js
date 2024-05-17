function print(a, b){
    let text = '';
    let sum = 0;
    while(a <= b){
        sum += a;
        text += a + " "
        a++
    }
    console.log(text);
    console.log(`Sum: ${sum}`);
}


print(0,26)