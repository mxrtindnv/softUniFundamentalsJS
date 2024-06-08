function matrix(number){

    let printingRow = "";

    function rowUpdate(input){
        for(let i = 0; i < input; i++){
            printingRow += `${input} `
        }
    }
    
    function collumnUpdate(input){
        for(let i = 0; i < input; i++){
            console.log(printingRow);
        }
    }
    
    rowUpdate(number);
    collumnUpdate(number);








}
matrix(3);   