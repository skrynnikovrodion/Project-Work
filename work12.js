const rerangeObj = (array) => {
	let indexMax = 0;
	let indexMin = 0;
	let save = 0;
	let newArr = array.slice();

	for (let i = 0; i < array.length; i++) {
		indexMax = (array[indexMax] > array[i]) ? indexMax : i;
		indexMin = (array[indexMin] < array[i]) ? indexMin : i;
	}
	
	save = newArr[indexMax];
	newArr[indexMax] = newArr[indexMin];
	newArr[indexMin] = save;
	
	return newArr;
}

const arr = [5, 7, 2, 9, 5, 6, 3, 1, 8];

console.log(replacementObj(arr));
