const increaseFunc = (length) =>{
  let arr = [];
  let string = [];

  for (let i = 0; i < length; i++){
	  string += "x";

    arr += string + "\n";
  }

  return arr;
}

let long = 7;

console.log(increaseFunc(long));
