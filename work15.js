const increaseFunc = (length) =>{
  let arr = [];
  let string = '';

  for (let i = 0; i < length; i++){
		string += 'x';
    arr.push(string);
  }

  return arr;
}

let long = 7;
const array = increaseFunc(long);
for(let i = 0; i < array.length; i++){
  console.log(array[i]);
}
