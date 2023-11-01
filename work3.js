const replaceText = (string) =>{
  let result = '';
  const exam = string.slice(0,3);
  const start_replace = 'abc';
  result = (exam === start_replace)
  ? 'www' + string.slice(3) 
  : string + 'zzz';

  return result;
}

const input = 'testabctext';
console.log(replacementFunc(input));  
