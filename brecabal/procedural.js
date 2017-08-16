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
    for(var j = 2; j < num; j++) {
      if (num % j === 0) {
        return false;
      }

    }
    return true;
  }

   return arreglo;


function getPrimes(start, end) {
  var arr = [];
    for (var i = start; i < end; i++) {
      if (isPrime(i)) {
        arr.push(i);
      }
    }
    return arr;

console.log(getPrimes(2,100))