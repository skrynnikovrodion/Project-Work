const renameFunc = (string) =>{
  const mastring = [];

  for (let i = 0; i < string.length; i++){
		switch (string[i] ) {
			case '_':
				mastring.push(0);
				break;
				
			case '-':
				mastring.push(1);
				break;
		}
	}

  const result = mastring.join("");

  return result;
}

const replace_string = '__|----|_|-|____|--';

console.log(renameFunc(replace_string));
