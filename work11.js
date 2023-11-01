const checkString = (string) => {
  const strArray = string.split();
  const hypertext =  /^[a-c]+$/;
  const result = strArray.map(e => hypertext.test(e));

  return result;
}

const text = 'abcbacabcbcabcbaba';

console.log(checkString(text));
