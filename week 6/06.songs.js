function songs(array){
    let songs = [];
    let numberOfSongs = array.shift();
    let typeSong = array.pop();

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for(let i = 0 ;i < numberOfSongs; i++){
        let [type, name, time] = array[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if(typeSong === "all"){
       songs.forEach((x) => console.log(x.name));
    }else{
        let filtered = songs.filter((i) => i.type === typeSong)
        filtered.forEach((i) => console.log(i.name))
    }



    




}
songs([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'favourite'])