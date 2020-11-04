error = "Oops! Not a prime Number";
success = "Yups!! it's a prime number"
function CheckIfPrime(num){
    if(num<=1) return error;
    if(num === 2) return success;

    for(i = 2; i < num; i++){
        if (num % i === 0){
            return error;
        }
    }
    return success;
}
console.log(CheckIfPrime(5))