function bubbleSort(items){
	var length = items.length; //SIZE OF N
	for(let i = 0; i < length; i++){ //FIRST LOOP, THE TOTAL NUMBER OF PASSES
		var sorted = true; //ASSUME THE LIST IS SORTED
		for(let j = 0; j < i; j++){
			//COMPARE THE CURRENT SPOT WITH THE NEXT SPOT
			if(items[j] > items[j+1]){
				sorted = false; //WE HAD TO SWITCH TWO NUMBERS, WE DON'T KNOW IF THE LIST IS SORTED ANYMORE
				//SWAP THE NUMBERS
				var temp = items[j] //TEMP VAR TO STASH THE VARIABLE
				items[j] = items[j + 1]; //THE LEFT ITEM IS NOW SET TO THE RIGHT ITEM'S POSITION
				items[j + 1] = temp //THE RIGHT ITEM IS NOT EQUAL TO THE LEFT ITEM LOCATION IN THE ARRAY
			}
		}
		if(sorted){ //SAME AS SORTED === TRUE
		break; //STOP THE OUTER LOOP BECAUSE WE DIDNT SWAP ANYTHING ON THIS PASS
		}
	}
	
}
	console.log(items);


bubbleSort([1,2,3,4,5,6,7,8]);
bubbleSort([5,4,2,7,6,8,1,3]);