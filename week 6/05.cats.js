function cats(array){

    for(let cat of array){
        cat = cat.split(' ')
        let printRow = {
            catName: cat[0],
            catAge: cat[1],
            meow() {
                console.log(`${this.catName}, age ${this.catAge} says Meow`);
            }
        }
        
        printRow.meow();
    }




}
cats(['Mellow 2', 'Tom 5'])