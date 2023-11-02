//	7. Отфильтровать коллекцию, где у свойства есть хоть какое-то значение
const testingStringArr = (testString) => {
  const newObj = testString.filter((serchObj) => {
    const result = Object.values(serchObj).some((value) => value);
  
    return result;
  });

  return newObj;
}

const testArray = 
  [{name: 'test', age: 34, country: 'RF'},
  {name: '', age: null, country: ''},
  {name: 'test1', age: null, country: ''},
  {name: '', age: 12, country: ''},
  {name: '', age: null, country: 'RF'}];

console.log(testingStringArr(testArray));
