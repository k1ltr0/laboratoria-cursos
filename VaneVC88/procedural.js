function isPrime(num) {
  for(var j = 2; j <= num/2; j++){
    if(num % j == 0){
      isPrime = false;
    }
  }
}

function getPrimes(start, end) {
  for (var i = start; i < end; i++) {
    var isPrime = true;
    var arreglo = [];
    

    if (isPrime) {
      arreglo.push([i]);
    }
  }
  return arreglo;
}
