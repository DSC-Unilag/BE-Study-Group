const prime =(number)=>{
if(number === 1){
  console.log('It is not a prime number');
else if(number ===2){
 console.log('It is a prime number');
else{
 for(let i=0;i<number;i++){
   if(number%i ===0){
   return "It isn't a prime number";
  }
}
return "It is a prime number";
}
}
