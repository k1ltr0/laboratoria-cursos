function isPrime(num) {
  for(var j = 2; j < num; j++) {
    if (num % j === 0) {
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

