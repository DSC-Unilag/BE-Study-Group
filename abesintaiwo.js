//grade interpreter
var score = Window.promt("enter your score to see your grade")
if(score >= 70 && grade <= 100)
{
console.log("A")
}
else if (score >= 60 && score <=69) {
  console.log("B")
}
else if(score >=50 && score <=59){
  console.log("c")
}
else if (score>=45 && score <=49){
  console.log("D")
}
else if( score >=40 && score <=44){
  console .log("E")
}
else if(score <= 39){
  console.log("F");
}
else {
  console.log( "invalid input")
}



// PH SCALE
 var PH = Window.promt("enter the PH value")
 if (pH > 7 && PH < 15 ){
   console.log("alkaline");
 }
 else if(PH < 7){
   console.log("Acidic")
 }
 else{
   console.log("invalid input");
 }
