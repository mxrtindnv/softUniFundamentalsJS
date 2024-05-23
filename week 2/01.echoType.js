function echo(data){
    const typeOfData = typeof data;
    console.log(typeOfData);
    
    if(typeOfData === "string" || typeOfData === "number"){
        console.log(data);
    }else{
        console.log(`Parameter is not suitable for printing`);
    }

}

echo(null)
