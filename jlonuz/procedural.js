 // ## Requisitos

 //   » La función getPrimes recibe dos argumentos: start y end, que nos deben
 //     permitir especificar el rango de números primos que nos interesa.
 //   » La función getPrimes debe retornar un array con los números primos en
 //     vez de imprimirlos en la consola. Para ello usa una variable donde ir
 //     gurdando los números primos que vayamos encontrando y al final de la
 //     función devuelve (retorna) ese array.
 //   » En el bucle de getPrimes, tendrás que sustituir el valor inicial de i
 //     por start y la condición por i < end.
 //   » Dentro del bucle de getPrimes debes invocar a isPrime para determinar
 //     si el número en cuestión es primo.
 //   » El bucle que en el ejercicio anterior usamos para comprobar si un
 //     número es primo, ahora debe quedar dentro de isPrime, la cual sólo ha
 //     de recibir un argumento (el número a comprobar) y retornar un booleano
 //     (true o false).
 //   » Asegúrate de que tu script exporta las funciones getPrimes e isPrime.


function isPrime(num) {
  for(var j = 2; j <= num/2 ; j++){
    	if( num % j == 0){
      		return false;
 	   }
  	}
  	return true;
}

function getPrimes(start, end) {

 var primes = [];

  for (var i = start ; i < end ; i++) {

    if (isPrime(i)) {
     	primes.push([i])
    }
  }
 return primes;
}

