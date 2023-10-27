const testString = (string) => {
  let mastring = string.split();
  
  const result = mastring.map(e => /^[a-c]+$/.test(e));

  return result;
}

const abracadabra = 'abcbacabcbcabcbaba';

console.log(testString(abracadabra));
