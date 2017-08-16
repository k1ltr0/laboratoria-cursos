function isPrime(num) {
 for (var i = 2; i<=num/2;i++){
  if(i%num==0){
    isPrime= false;
  }else{
    isPrime=true;
  }
  }
}

function getPrimes(start, end) {
  for (var i = start; i< end; i++) {
    var isPrime = true;
    var arreglo=[]

    

    if (isPrime) {
      arreglo.push([i]);
    }
  }
   return arreglo;
}
