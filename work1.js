const sortElements = (arr, direction) => {
  let newArr = structuredClone(arr);
  newArr.sort((a,b) => a - b);

  newArr = (direction === 'asc') 
    ? newArr 
    : newArr.reverse();
  
  return newArr;
}

const elements = [6, 43, -6, 3, 0, 5, 2, 7];
const sortedArray = sortElements(elements, 'asc');
  
console.log(sortedArray);
