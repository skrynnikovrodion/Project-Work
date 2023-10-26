const number1 = [5, 2, 7, 3, 6, 8, 2, 9, 1];
const number2 = [4, 2, 9, 4, 5, 4];

const duplicatedValues = [...new Set(number1)].filter(item => number2.includes(item));

console.log(duplicatedValues);


//Решено