const camelCase = (array) => {
  const random = Math.floor(Math.random() * array.length);

  return array[random];
}

const arr = [4, 8, 2, 9, 4, 6, 5, 1, 7, 4];

console.log(camelCase(arr));
