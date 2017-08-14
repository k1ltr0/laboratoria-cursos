function isPrime(num) {
  //...
}

function getPrimes(start, end) {
	for (var i = start; i < end; i++) {
		var isPrime = true;
		var primes = [];
		for (var j = 2; j <=(i/2); j++){
			if(i%j === 0){
				isPrime = false;
			}
		}    
		if (isPrime) {
			console.log(i);
		}
	}
	return primes;

}
