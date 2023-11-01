const sortArray = (array, direction, serchObj) => {  
  const result = JSON.parse(JSON.stringify(array));
  result.sort((a, b) => a[serchObj] < b[serchObj] ? 1 : -1);

  switch (direction) {
    case 'desc':
      result;
      break;
      
    case 'asc':
      result.reverse();
      break;
  }

  return result;
}

const arr = [
  {name: 'test', age: 34, country: 'RF'},
  {name: 'test2', age: 12, country: 'RF'},
  {name: 'test1', age: 54, country: 'RF'}
];

console.log(sortArray(arr, 'asc', 'age'));
