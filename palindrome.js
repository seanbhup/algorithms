function findPali(start,end){
	var paliArray = [];
	for (var i = start; i <= end; i++){
		for(var j = start; j <= end; j++){
			var number = i * j;
			var string = number.toString();
			var stringReversed = string.split("").reverse().join("");
			if(string == stringReversed){
				paliArray.push(Number(number));
			}
		}
	}
	return Math.max(...paliArray);
}


console.log(findPali(100,999));
