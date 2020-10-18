// Assignment 1: GRADE INTERPRETER


let grade = 67

if (grade <= 100 && grade >= 70) {
    console.log("A");
}
if (grade <= 69 && grade >= 60) {
    console.log("B");
}
if (grade <= 59 && grade >= 50) {
    console.log("C");
}
if (grade <= 49 && grade >= 45) {
    console.log("D");
}
if (grade <= 44 && grade >= 40) {
    console.log("E");
}
if (grade <= 38) {
    console.log("F");
}


// Assignment 2: pH SCALE

let phValue = 9

if (phValue == 7) {
    console.log("Neutral");
} else if (phValue <= 14 && phValue > 7) {
    console.log("Alkaline");
} else if (phValue < 7 && phValue >= 0) {
    console.log("Acidic");
} else {
    console.log("Invalid");
}