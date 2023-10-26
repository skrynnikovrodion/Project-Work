const maxminFunc = (array) =>{
    let KeyMax = 0;
    let KeyMin = 0;
    let save = 0;

    for (let i = 0; i < array.length; i++){

        if (array[KeyMax] > array[i]){}
        
        else
        KeyMax = i;

    }

    for (let j = 0; j < array.length; j++){

        if (array[KeyMin] < array[j]){}
        
        else
        KeyMin = j;
    
    }

    let newArr = array.slice();
    save = newArr[KeyMax];
    newArr[KeyMax] = newArr[KeyMin];
    newArr[KeyMin] = save;
    
    return newArr;
}

const massiv = [5, 7, 2, 9, 5, 6, 3, 1, 8];

console.log(maxminFunc(massiv));

//Решено