
/*function isPrime(num) {
  //...
  for (var i = 2; i < 20; i++) {
    var isPrime = true;
    for(var j = 2; j <= i/2; j++){
      if(i%j ==0){
        isPrime = false;
      }
    }
  }
}*/
function getPrimes(start, end) {
    var primos = [];
  for (var i = start; i < end; i++) {
    if (isPrime(i)){
      primos.push(i);
    }
  }
  return primos;
}