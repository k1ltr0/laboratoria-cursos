// Iteramos desde 2 (el primer número primo) hasta 19 (menor que 20)
for (var i = 2; i < 20; i++) {
  var isPrime = true;
  for (var j = 2; j <=(i/2); j++){
    if(i%j === 0){
      isPrime = false;
    }
  }
  if (isPrime) {
    console.log(i);
  }
}


