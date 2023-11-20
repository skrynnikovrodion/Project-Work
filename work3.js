const replaceText = (string) =>{
  let result = '';
  
  result = (string.startsWith('abc'))
    ? 'www' + string.slice(3) 
    : string + 'zzz';

  return result;
}

const input = 'testabctext';
console.log(replaceText(input));
