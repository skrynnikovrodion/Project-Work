const arr1 = [['cat', 5], ['dog', 6], ['dog', 11]];

const returnArrayOfPairs = (arrays) => {
  let obj = {};

  arrays.forEach(array => {
    let key = array[0];
    let value = array[1];

    obj = {
      ...obj,
      [key]: value,
    };
  });

  return obj;
};

console.log(returnArrayOfPairs(arr1))