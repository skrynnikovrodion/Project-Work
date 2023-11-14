const checkString = (string) => {
  const strArray = string.split();
  const regexp =  /^[a-c]+$/;
  const result = strArray.map(event => regexp.test(event));

  return result;
}

const text = 'abcbacabcbcabcbaba';

console.log(checkString(text));
