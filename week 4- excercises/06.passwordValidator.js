function passwordValidation(password) {

    const lengthCheck = function (input) {

        if (input.length >= 6 && input.length <= 10) {
            return true;
        } else {
            console.log(`Password must be between 6 and 10 characters`);
            return false;
        }

    }

    const alphaNumericCheck = function (input) {

        const pattern = /^[A-Za-z0-9]+$/;
       

        if (pattern.test(input)) {
            return true;
        } else {
            console.log(`Password must consist only of letters and digits`);
            return false;
        }


    }

    const digitsCheck = function (input) {
        let digitNum = 0;
    
            for (let i = 0; i < input.length; i++) {
              if (input[i] >= '0' && input[i] <= '9') {
                digitNum += 1
              }
            }
            
       if(digitNum >= 2){
        return true;
       }else{
        console.log(`Password must have at least 2 digits`);
        return false;
       }

        


    }

    const isLongEnough = lengthCheck(password);
    const isAplhaNumeric = alphaNumericCheck(password);
    const has2Digits = digitsCheck(password);
    
    if(isLongEnough && isAplhaNumeric && has2Digits){
        console.log(`Password is valid`);
    }

    

}
passwordValidation('Pa$s$s')