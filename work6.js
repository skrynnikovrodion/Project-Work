const table = 
[{name: 'test', price: 200},
{name: 'test1', price: 300},
{name: 'test', price: 100},
{name: 'test', price: 600}];

const resultObject = {};

for (let item of table) {
  const resultValue = resultObject[item.name];
  if (resultValue) {

    resultValue.price += item.price;
  } else {

    resultObject[item.name] = { ...item };
  }
}

const resultArray = Object.values(resultObject);


console.log(resultArray);



//Решено