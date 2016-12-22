// $(document).ready(function(){



// })

checkPrime();

function checkPrime(){
	console.log("a");
	var hitCounter = 0;
	var specificPrime = 0;
	var isP
	var setPrime = 0;
	var primeList = [2, 3, 5, 7, 13];

	for (var i = 0; hitCounter < 50; i++) {
		if((i % 2 != 0) || (i % 3 != 0) || (i % 5 != 0) || (i % 7 != 0)){
			primeList.push(i);
			console.log(primeList);
		}
	}
// 		if(checkHit == false){
// 			hitCounter++;
// 			setPrime = i;
// 		}
// 		checkHit = false;
// 	}
// 	console.log(setPrime);
// }

// function printPrime(value) {
//     var primes = [];
//     for(var i = 2; i < value; i++) {
//         primes[i] = true;
//     }
//     var limit = Math.sqrt(value);
//     for(var i = 2; i < limit; i++) {
//         if(primes[i] === true) {
//             for(var j = i * i; j < value; j += i) {
//                 primes[j] = false;
//             }
//         }
//     }
//     for(var i = 2; i < value; i++) {
//         if(primes[i] === true) {
//             console.log(i + " " + primes[i]);
//         }
//     }
// }

// printPrime(10001);

