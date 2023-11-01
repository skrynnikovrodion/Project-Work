const sortElements = (arr, direction) => {
  let newArr = arr.slice(0);
  let result = newArr.sort((a,b) => a - b);

  newArr = (direction === 'asc') 
    ? result 
    : result.reverse();
  
  return newArr;
}

  const elements = [6, 43, -6, 3, 0, 5, 2, 7];
  const sortedArray = sortElements(elements, 'asc');
  
  console.log(sortedArray);
