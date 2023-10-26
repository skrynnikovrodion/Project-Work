const string = 'abcbacabcbcabcbaba';

let mastring = string.split();

const result = mastring.map(e => /^[a-c]+$/.test(e));

console.log(result);
