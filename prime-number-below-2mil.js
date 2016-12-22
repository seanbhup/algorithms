function isPrime(num) {
  for(var i = 2; i < num; i++) {
    if(!(num % i)) {
      return false
    }
  }
  return true;
}


function sumPrimes(num) {
  var sum = 0;
  for(var i = 2; i <= num; i++) {
    if(isPrime(i)) {
      sum += i;
    }
  }
  retun sum;
}
console.time("sumPrimes");
console.log(sumPrimes(20));
console.timeEnd("sumPrimes");
// 493.872 seconds