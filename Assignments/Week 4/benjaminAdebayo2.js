function checkPrime(num){
    if(num <= 1) console.log(false);
    if(num === 2) console.log(true);
    for(i = 2; i< num; i++){
        if(num %i === 0) console.log(false);
       console.log(num > 1);
    }
}
checkPrime(1)