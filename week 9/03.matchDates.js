function dates(input){

    let pattern = /\b(?<day>\d{2})([.\/-])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/gm

    while((validDate = pattern.exec(input)) !== null){
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        console.log(validDate);
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    }


}
dates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])