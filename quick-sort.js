function quickSort(arr){
	if(arr.length == 0){
		return[];
	}
	//START THE LEFT ARRAY (LEFT OF THE WALL)
	var left = [];
	// INIT RIGHT ARRAY, RIGHT OF THE WALL
	var right = [];
	// PICK THE FIRST NUMBER AS AN ARBITRARY PIVOT ELEMENT
	var pivot = arr[0];

	// RUN THROUGHT THE ARRAY AND TEST THE PIVOT (FIRST ELEMENT) AGAINST EACH
	for(var i = 1; i < arr.length; i++){
		if(arr[i] < pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat(pivot, quickSort(right));

}

quickSort([2,5,23,6,33,126,"sean",2365,2341,9,3,99]);