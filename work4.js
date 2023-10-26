const randomFunc = (number) =>{
    let random = Math.floor(Math.random() * number.length);

    return number[random];
}

const arr = [4, 8, 2, 9, 4, 6, 5, 1, 7, 4];

console.log(randomFunc(arr));


//Работает