function pRime(n){
	for (i= 2; i<n; i= i+1){
		if(n% i==0 ){
			return false
		} else if(n<=1){
			return false
		} else{
			return true
		}
	}
}


console.log(pRime(45))

//PrimeNumbersas