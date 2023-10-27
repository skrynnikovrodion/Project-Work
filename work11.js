const checkString = (string) => {
  const mastring = string.split();
  const phpcode =  /^[a-c]+$/;
  
  const result = mastring.map(e => phpcode.test(e));

  return result;
}

const abracadabra = 'abcbacabcbcabcbaba';

console.log(testString(abracadabra));
