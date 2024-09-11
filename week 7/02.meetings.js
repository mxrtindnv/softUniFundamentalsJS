function meetCalendar(input){

    let calendar = {};

    for(let line of input){
        line = line.split(' ')
        let day = line[0];
        let person = line[1];
        if(calendar.hasOwnProperty(day) === false){
            calendar[day] = person;
            console.log(`Scheduled for ${day}`);
        }else{
            console.log(`Conflict on ${day}!`);
        }
    }

    for(let [day,person] of Object.entries(calendar)){

        console.log(`${day} -> ${person}`);

    }

    



}
meetCalendar(['Monday Peter',

    'Wednesday Bill',
    
    'Monday Tim',
    
    'Friday Tim'])