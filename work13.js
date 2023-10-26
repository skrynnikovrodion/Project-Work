const transform = (array) =>{
    return Object.fromEntries(array.map(({ name, value }) => [name, value]));
}

const arr = 
[{name: 'width', value: 300}, 
{name: 'height', value: 100}];

console.log(transform(arr));

//Решено