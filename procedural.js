function isPrime(num) {
	var isPrime = true
  for (var j=2; j<num/2; j++){
  	if(num%j === 0){
  		return isPrime = false
  	}
  }
  return isPrime
}

function getPrimes(start, end) {
  for (var i = start; i < end; i++) {
    var isPrime = isPrime(i);
    if (isPrime) {

      console.log(i);
    }
  }
}
//Ejercicio incompleto