function isPrime(num) {
	for(var j = 2;j < num; j++){
		if(num%j === 0){
			return false;
		}
	}
	return true;
}

function getPrimes(start, end) {
	var primes = [];
	for (var i = start; i < end; i++) {
		if (isPrime(i)) {
			primes.push(i);
		}
	}
	return primes;
}

