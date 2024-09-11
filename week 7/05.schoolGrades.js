function grades(input){
    let gradeBook = {};

    for(let student of input){
        student = student.split(' ');
        let name = student.shift();
        if(gradeBook.hasOwnProperty(name) === false){
            let grade = 0;
            let gradesNum = 0;
            for(let i = 0;i < student.length; i++){
                gradesNum++
                grade += Number(student[i]);
            }

            
            gradeBook[name] = (grade/gradesNum).toFixed(2)
        }else{

            let grade = 0;
            let gradesNum = 0;
            for(let i = 0;i < student.length; i++){
                gradesNum++
                grade += Number(student[i]);
            }

            let middleNum = Number(gradeBook[name]);
            let thisAverage = grade/gradesNum

            let newGrade = ((middleNum + thisAverage) / 2).toFixed(2);

            gradeBook[name] = newGrade;


        }




    }

    const sortedGradebook = Object.entries(gradeBook).sort();
    for(let [name, grade] of sortedGradebook){
        console.log(`${name}: ${grade}`);
    }


}
grades(['Lilly 4 6 6 5',

    'Tim 5 6',
    
    'Tammy 2 4 3',
    
    'Tim 6 6']);