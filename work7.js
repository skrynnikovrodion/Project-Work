const testingStringArr = (testString) => {
let newObj = testString.filter((name, age, country) =>{
  return Object.values(name, age, country).some((value) => value)
});
}

const testArray = 
[{name: 'test', age: 34, country: 'RF'},
{name: '', age: null, country: ''},
{name: 'test1', age: null, country: ''},
{name: '', age: 12, country: ''},
{name: '', age: null, country: 'RF'}];

console.log(testingStringArr(testArray));
