function isPrime(num) {
  //...
  var isPrime = true;
    for(var j = 2; j <= i/2; j++){
      if(i%j ==0){
        isPrime = false;
      }
    }

function getPrimes(start, end) {
	var primos = "";
  for (var i = start; i < end; i++) {
    //var isPrime = true;
    if (isPrime(i)){
      primos.push(i);
    }
  }
  return primos;
}
