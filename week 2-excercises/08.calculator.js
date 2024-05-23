function calc(a, operator, b){

    switch(operator){
        case "+":
            console.log((a + b).toFixed(2)); break;
            case "-":
                console.log((a - b).toFixed(2)); break;
                case "/":
                    console.log((a / b).toFixed(2)); break;
                    case "*":
                        console.log((a * b).toFixed(2)); break;
    }


}
calc();