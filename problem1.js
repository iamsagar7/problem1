var factorial = [1,1,2,6,24,120,720,5040,40320,362880];
var sum = 0;

for(var i = 3; i < 10000000; i++){
	var numStr = String(i);
	var length = numStr.length;
	var sumI = 0;
	for(var digit = 0; digit < length; digit++){
		if(sumI > i){break;} // break loop when whent over
		sumI += factorial[parseInt(numStr[digit])];
	}

	if(sumI == i){
		console.log(i);
		sum += sumI;
	}
}

console.log(sum);
