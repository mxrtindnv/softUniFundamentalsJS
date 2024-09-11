function houseParty(input){

    let partyList = [];
    let nameFound = false

    const checkNameInList = function(name){

        nameFound = false;

        for(let i = 0; i < partyList.length; i++){
            if(partyList[i] === name){
                return nameFound = true;
            }
        }
        
    }

    
    for(let row of input){

        let name = row.split(' ')[0];
        let isGoing = row.split(' ')[2];
        
        if(isGoing === "going!"){

            if(checkNameInList(name) === true){
                console.log(`${name} is already in the list!`);
            }else{
                partyList.push(name)
            }

        }else{

            if(checkNameInList(name) === true){
                partyList = partyList.filter(x => x != name);
            }else{
                console.log(`${name} is not in the list!`);
            }
        }



    }

    for(let c = 0; c < partyList.length; c++){
        console.log(partyList[c]);
    }






}
houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])