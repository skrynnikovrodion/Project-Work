const sortFunk = (array, direction, index) =>{
  let result = [];

  switch (index){
    case 'name':
      result = array.sort((a, b) => a.name < b.name ? 1 : -1);
      break;

    case 'age':
      result = array.sort((a, b) => a.age < b.age ? 1 : -1);
      break;

    case 'country':
      result = array.sort((a, b) => a.country < b.country ? 1 : -1);
      break;
  }
  
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

console.log(sortFunk(arr, 'asc', 'age'));
