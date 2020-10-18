const grade =100;

if(grade >= 70 && grade <= 100 ) {
  console.log("Your grade is A") 
} else if(grade >= 60 && grade <= 69) {
  console.log("Your grade is B")   
} else if(grade >= 50 && grade <= 59) {
  console.log("Your grade is C")   
} else if(grade >= 45 && grade <= 49) {
  console.log("Your grade is D")   
} else if(grade >= 40 && grade <= 44) {
  console.log("Your grade is E")   
} else if(grade < 39) {
  console.log("Your grade is F")  
}



let pH = 2;

if(pH < 0 || pH > 14) {
  console.log("Value is invalid");
}else if (pH > 7) {
  console.log("pH value is alkaline");
}else if (pH < 7) {
  console.log("pH value is acidic");
}else if (pH = 7) {
  console.log("pH value is neutral");
} 
 
