
const gradeInterpreter = (score) => {
    let grade;

    if(score >= 70){
        grade = "A"
    }
    else if(score >= 60 && score < 70){
        grade = "B"
    }
    else if(score >= 50 && score < 60){
        grade = "C"
    }
    else if(score >= 45 && score < 50){
        grade = "D"
    }
    else if(score >= 40 && score < 45){
        grade = "E"
    }
    else{
        grade = "F"
    }
    return grade
};

console.log(gradeInterpreter(50));



const phScale = (value) => {
    let ph;

    if(value > 7 && value <= 14){
        ph = "alkaline"
    }
    else if(value < 7 && value >= 0){
        ph = "acidic"
    }
    else if(value == 7){
        ph = "neutral"
    }
    else{
        ph = "invalid"
    }
    return ph
};

console.log(phScale(10))
