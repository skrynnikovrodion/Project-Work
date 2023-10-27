const additArray = (array) => {
  const resultObject = {};
  
  for (let item of array) {
    const resultValue = resultObject[item.name];
    
    if (resultValue) {
      resultValue.price += item.price;
    } else {
  
      resultObject[item.name] = { ...item };
    }
  }

  const result = Object.values(resultObject);
  
  return result;
}

const table = 
[{name: 'test', price: 200},
{name: 'test1', price: 300},
{name: 'test', price: 100},
{name: 'test', price: 600}];

console.log(resultArray(table));
