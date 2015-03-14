var count = 1
while (count < 101) {
	if ((count%3) == 0) {
		if ((count%5) == 0) {
			console.log('fizzbuzz');
			count++;
		}
		else {
			console.log('fizz');
			count++;
		}
	} else if ((count%5) == 0) {
		console.log('buzz');
		count++;
	} else {
		console.log(count);
		count++
	}
}