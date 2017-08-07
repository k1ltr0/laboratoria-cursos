function isPrime(num) {
  for (var i = 0; i < num; i++){
    if (num % i == 0){
      return false;
    }
  }
  return true;
}

function getPrimes(start, end) {
  var arr = [];
    for (var i = start; i < end; i++) {
      if (isPrime(i)) {
        arr.push(i);
      }
    }
    return arr;
}