const maxminFunc = (array) =>{
    
    let KeyMax = 0;
    let KeyMin = 0;
    let save = 0;
    let newArr = array.slice();

    for (let i = 0; i < array.length; i++){

        KeyMax = (array[KeyMax] > array[i]) ? KeyMax : i;
    }

    for (let j = 0; j < array.length; j++){

        KeyMax = (array[KeyMax] < array[i]) ? KeyMax : i;
    }
    
    save = newArr[KeyMax];
    newArr[KeyMax] = newArr[KeyMin];
    newArr[KeyMin] = save;
    
    return newArr;
}

const massiv = [5, 7, 2, 9, 5, 6, 3, 1, 8];

console.log(maxminFunc(massiv));
