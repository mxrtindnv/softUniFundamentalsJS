function calc(r, h){

    const volume = (Math.PI * Math.pow(r, 2) * h) * 1/3;
    const totalSurfaceArea = Math.PI * r *(r + (Math.sqrt(r * r + h * h)) ) ;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);



}
calc(3, 5);