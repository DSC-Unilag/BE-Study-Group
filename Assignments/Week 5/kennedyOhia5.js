
function aRay(num, len){
	let multiples = [ ];
	for ( let a= 0;  a <= len; a++){
		multiples[a] = num * ( a + 1); 
	}
	console.log(multiples)
}


aRay(2,4)



 let n1 = 0;
 let n2 = 1;
 
 
function fiB(n){
	if (n <= 1  ){
		return [0,1]
	} else {
		let fiBB = [ ]; 
			for (let a = 0; a <= n; a++){
		let nExt= n1 + n2; 
		n1 = n2;
		n2 = nExt;
		fiBB[a]= nExt
	}
	  console.log(fiBB)
	}
}

console.log(fiB(10))





