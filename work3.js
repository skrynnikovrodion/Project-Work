const findError = (string) =>{
    let result = '';
    find = string.slice(0,3);
    start_replace = 'abc';

    result = (find === start_replace) ? result = 'www' + string.slice(3) : result = string + 'zzz';
    
    return result;
}

const input = 'testabctext';
console.log(findError(input));
