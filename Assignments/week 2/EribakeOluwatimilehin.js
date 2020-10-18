let grade;
let pH;

function getGrade (score){
  if (score >=0 && score <= 100){
    if (score >= 70) return "Your grade is A"
    else if (score >=60 && score <= 69) return "Your grade is B"
    else if (score >=50 && score <= 59) return "Your grade is C"
    else if (score >=45 && score <= 49) return "Your grade is D"
    else if (score >=40 && score <= 44) return "Your grade is E"
    else {return "Your grade is F"}
  } else {return "Invalid"}
}

function getPhVal(num){
  if (num >= 0 && num <= 14){
    if (num < 7)return "Acidic"
    else if (num > 7) return "Alkaline"
    else return "Neutral"
  } else return "Invalid"
  }
}

grade = getGrade(11)
pH = getPhVal(7)
console.log(grade)