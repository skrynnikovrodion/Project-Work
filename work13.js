const unionFunc = (array) =>{
  const result = Object.fromEntries(array.map(({ name, value }) => 
  [name, value]));

  return result;
}

const arr = 
[{name: 'width', value: 300}, 
{name: 'height', value: 100}];

console.log(transform(arr));
