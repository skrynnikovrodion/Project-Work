const duplicatedValues = (array1, array2) => {
  const newArray = [...new Set(array1)];
  const result= newArray.filter(item => array2.includes(item));

  return result;
}

const number1 = [5, 2, 7, 3, 6, 8, 2, 9, 1];
const number2 = [4, 2, 9, 4, 5, 4];
  
console.log(duplicatedValues(number1, number2));
