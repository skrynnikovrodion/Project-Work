const sortFunk = (users, task) =>{

    let result = (task === "desc") ? users.sort((a, b) => a.age < b.age ? 1 : -1) : users.sort((a, b) => a.age > b.age ? 1 : -1);

    return result
}

let asc = "asc";
let desc = "desc";

const arr = [
    {name: 'test', age: 34, country: 'RF'},
    {name: 'test2', age: 12, country: 'RF'},
    {name: 'test1', age: 54, country: 'RF'}
  ]

console.log(sortFunk(arr, asc));
