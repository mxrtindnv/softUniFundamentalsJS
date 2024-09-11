function party(input){
    let vipGuests = [];
    let regularGuests = [];
    let i = 0;
    
    for(let guest of input){
        i++
       
        if(guest === "PARTY"){
        break;
        }else{
            if(guest.charCodeAt(0) >= 48 && guest.charCodeAt(0) <= 57){
                vipGuests.push(guest)
            }else{
                regularGuests.push(guest);
            }
           

        }
    }



    
 
    

    let vipGuestsSet = new Set(vipGuests);
    let regularGuestsSet = new Set(regularGuests);
    for(i; i < input.length; i++){
        row = input[i];
        if(vipGuestsSet.has(row)){
            vipGuestsSet.delete(row);
        }else if(regularGuestsSet.has(row)){
            regularGuestsSet.delete(row);
        }


    }

    let guestsMissing = vipGuestsSet.size + regularGuestsSet.size
    console.log(guestsMissing);

    vipGuestsSet.forEach(guest => {
        console.log(guest);
    }

    )

    regularGuestsSet.forEach(guest => {
        console.log(guest);
    }

    )


    

}
party(['m8rfQBvl',

    'fc1oZCE0',
    
    'UgffRkOn',
    
    '7ugX7bm0',
    
    '9CQBGUeJ',
    
    '2FQZT3uC',
    
    'dziNz78I',
    
    'mdSGyQCJ',
    
    'LjcVpmDL',
    
    'fPXNHpm1',
    
    'HTTbwRmM',
    
    'B5yTkMQi',
    
    '8N0FThqG',
    
    'xys2FYzn',
    
    'MDzcM9ZK',
    
    'PARTY',
    
    '2FQZT3uC',
    
    'dziNz78I',
    
    'mdSGyQCJ',
    
    'LjcVpmDL',
    
    'fPXNHpm1',
    
    'HTTbwRmM',
    
    'B5yTkMQi',
    
    '8N0FThqG',
    
    'm8rfQBvl',
    
    'fc1oZCE0',
    
    'UgffRkOn',
    
    '7ugX7bm0',
    
    '9CQBGUeJ'
    
    ]
    
    )