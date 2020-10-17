//Grade interpreter

let grade=45;
switch (true) {
    case (grade>=70 && grade<=100):
        console.log("A")
        break;
    case (grade>=60 && grade<=69):
        console.log("B")
        break;
    case (grade>=50 && grade<=59):
        console.log("C")
        break;
    case (grade>=45 && grade<=49):
        console.log("D")
        break;
    case (grade>=40 && grade<=44):
        console.log("E")
        break;
    default:
        console.log("F")
        break;
}



//PH Scale
let ph=4;
switch (true) {
    case (ph>7 && ph<=14):
        console.log("Alkaline")
        break;
    case (ph<7 && ph>=0):
        console.log("Acidic")
        break;
    case (ph==7):
        console.log("Neutral")
        break;
    default:
        console.log("Invalid")
        break;
}
