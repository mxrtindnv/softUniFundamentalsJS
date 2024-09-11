function store(stock, order){
    let storeStock = {

    }

    for(let i = 0; i < stock.length; i+= 2){
        let product = stock[i];
        let quantity = Number(stock[i+1]);
        storeStock[product] = quantity;

    }

    for(let i = 0; i < order.length; i+= 2){
        let product = order[i];
        let quantity = Number(order[i+1]);
        if(product in storeStock === true){
            storeStock[product] += quantity;
        }else{
            storeStock[product] = quantity;
        }

    } 

    for(let row of Object.entries(storeStock)){
        console.log(`${row[0]} -> ${row[1]}`);
    }

    
   

   
}
store([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])