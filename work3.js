const findError = (string) =>{
    let result = '';
    find = string.slice(0,3);
    start_replace = 'abc';
    
    if (find === start_replace){
        result = 'www' + string.slice(3);

        return result;
    }
    else 
    result = string + 'zzz';

    return result;
}

const input = 'testabctext';
console.log(findError(input));

//Работает