function movies(input){
    let movies = [];

    for(let row of input){
        if(row.includes("addMovie")){
            const tokens = row.split("addMovie ");
            const movieName = tokens[1];
            movies.push({ name: movieName})
        }else if(row.includes('directedBy')){

            const [movieName, movieDirector] = row.split(" directedBy ");

            const existingMovie = movies.find(movieObj => movieObj.name === movieName)

            if(existingMovie){
                existingMovie.director = movieDirector
            }

        }else if(row.includes("onDate")){
            const [movieName, movieDate] = row.split(" onDate ")

            const existingMovie = movies.find(movieObj => movieObj.name === movieName)

            if(existingMovie){
                existingMovie.date = movieDate
            }

        }
    }

    for(let i = 0; i < movies.length; i++){
        if('name' in movies[i] === true && 'date' in movies[i] === true && 'director' in movies[i] === true){
            console.log(JSON.stringify(movies[i]));
        }
    }

    
    

    
}
movies([

    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ])