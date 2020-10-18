//Question 1

let score = prompt("Enter your score: ");

let grade;

if (score <= 100 && score >= 70) {
    grade = "A";
    console.log(grade);
} else if (score <= 69 && score >= 60) {
    grade = "B";
    console.log(grade);
} else if (score <= 59 && score >= 50) {
    grade = "C";
    console.log(grade);
} else if (score <= 49 && score >= 45) {
    grade = "D";
    console.log(grade);
} else if (score <= 44 && score >= 40) {
    grade = "E";
    console.log(grade);
} else if (score <= 39 && score >= 0) {
    grade = "F";
    console.log(grade);
} else {
    console.log("Invalid Score")
}


//Question 2
let phValue = prompt("Enter PH Value: ");


if (phValue > 7) {
    console.log("Alkaline")
} else if (phValue == 7) {
    console.log("Neutral")
} else if (phValue < 7 && phValue >= 0) {
    console.log("Acidic")
} else {
    console.log("Invalid PH value. Enter a value between 0 and 15. Zero inclusive")
}