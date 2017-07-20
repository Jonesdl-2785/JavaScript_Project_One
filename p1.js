function getGrades() {
    let getinfo = document.getElementById('grades').value;
    let grade = 0;
    let aver = 'grade average';
    let gNumber = 0;

for(i = 0; i <= getinfo.length; i++){
    if(getinfo>= 90 || grade <= 100){
        grade = "A";
    document.getElementById('letter').innerHTML = "A";
    }

    if(getinfo >= 80 || getinfo <= 89){
        grade = "B";
    document.getElementById('letter').innerHTML = "B";
    }

    if(getinfo >= 70 || getinfo <= 79){
        grade = "C";
    document.getElementById('letter').innerHTML = "C";
    }

    if(getinfo >= 60 || getinfo <= 69){
        grade = "D";
    document.getElementById('letter').innerHTML = "D";
    }

    if(getinfo >= 0 || getinfo <= 59){
        grade = "E";
    document.getElementById('letter').innerHTML = "E";
    }
}
    aver = gNumber/grade
    document.getElementById('average').innerHTML = aver + '    ';

}
