let test = 
[{name: 'test', age: 34, country: 'RF'},
{name: '', age: null, country: ''},
{name: 'test1', age: null, country: ''},
{name: '', age: 12, country: ''},
{name: '', age: null, country: 'RF'}];


let newObj = test.filter((name, age, country) =>
{
  return Object.values(name, age, country).some((value) => value)
});

console.log(newObj)


//Решено