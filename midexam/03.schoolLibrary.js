function school(input){

    let bookshelf = input.shift().split('&');
    
    for(element of input){

        
        element = element.split(' | ')
        
        let action = element[0];
        let book = element[1];
        let book2 = element[2];
       

       if(action === "Add Book"){
         if(bookshelf.includes(book) === false){
            bookshelf.unshift(book)
         }
       }else if(action === "Take Book"){
        bookshelf = bookshelf.filter(a => a != book);
       }else if(action === "Swap Books"){
        if(bookshelf.indexOf(book) >= 0 && bookshelf.indexOf(book2) >= 0){
            let mid = book;
            let midIndex = bookshelf.indexOf(book2);
            bookshelf[bookshelf.indexOf(book)] = book2;
            bookshelf[midIndex] = mid;
        }
       }else if(action === "Insert Book"){
        if(bookshelf.includes(book) === false){
            bookshelf.push(book)
        }
       }else if(action === "Check Book"){

        let index = Number(element[1]);

         if(bookshelf[index] != undefined){
            console.log(bookshelf[index]);
         }
        

       }else if(action === "Done"){
        return console.log(bookshelf.join(', '));
       }


    }

    







}
school((["War and Peace&Hamlet&Ulysses&Madame Bovary","Check Book | 2","Swap Books | Don Quixote | Ulysses","Done"]));