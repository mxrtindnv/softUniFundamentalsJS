function towns(input){
    for(let row of input){
        row = row.split(" | ");
        let cityInfo = {
            town: row[0],
            latitude: Number(row[1]).toFixed(2),
            longitude: Number(row[2]).toFixed(2),
        }

        console.log(cityInfo);
       
       
    }

}
towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])