function isPrime(num) {
	if(num===1){
		return false
	}else{
		for(var j=2;j<= num;j++){ 
           if(num%j!==0 ||num===2){
              return true;  
           }else{
           	 return false;
           }
       }

	}
  	
}

function getPrimes(start, end) {
 let newPrime=[];
  for (var i = start; i < end; i++) {
    if (isPrime(i)) {
      newPrime.push(i);
    }
  }
return newPrime;
}

getPrimes(1,20);
getPrimes(50,100);

