function vaccay(num, type, day){
    let totalPrice = 0;
    switch(type){
        case "Students":   
        switch(day){
            case "Friday": 

            totalPrice = num * 8.45;
            
            break;
            
            case "Saturday": 
             
            totalPrice = num * 9.80;

            break;
            
            case "Sunday": 
            
            totalPrice = num * 10.46;
            
            break;
        }

        if(num >= 30){
            totalPrice = totalPrice * 0.85;
        }
        
        
        
        break;
        
        case "Business":
            if(num >= 100){
                num -= 10;
            }
            switch(day){
                case "Friday": 
    
                totalPrice = num * 10.9;
                
                break;
                
                case "Saturday": 
                 
                totalPrice = num * 15.6;
    
                break;
                
                case "Sunday": 
                
                totalPrice = num * 16;
                
                break;
            }
            
        
        
        break;
        
        case "Regular":


        switch(day){
            case "Friday": 

            totalPrice = num * 15;
            
            break;
            
            case "Saturday": 
             
            totalPrice = num * 20;

            break;
            
            case "Sunday": 
            
            totalPrice = num * 22.5;
            
            break;
        }
            
        if(num>=10 && num <= 20){
            totalPrice = totalPrice * 0.95;
        }
        
        
        break;

    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vaccay(30,

    "Students",
    
    "Sunday")