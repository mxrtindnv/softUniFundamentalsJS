function gramophoneRotation(bandName, albumName, songName){
    const songDuration = (albumName.length * bandName.length) * songName.length / 2;
    console.log(`The plate was rotated ${Math.ceil(songDuration / 2.5)} times.`);



}
gramophoneRotation('Black Sabbath', 'Paranoid',

'War Pigs')