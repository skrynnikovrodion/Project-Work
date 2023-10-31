const increaseFunc = (length) =>{
  let arr = [];
  let string = '';

  for (let i = 0; i < length; i++){
		string += "x";
    arr.push(string);
		arr += "\n";
  }

  return arr;
}

const long = 7;

console.log(increaseFunc(long));
