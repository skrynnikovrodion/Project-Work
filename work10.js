const renameFunc = (string) => {
  const strArray = [];

  for (let i = 0; i < string.length; i++) {
		switch (string[i]) {
			case '_':
				strArray.push(0);
				break;
				
			case '-':
				strArray.push(1);
				break;
		}
	}

  const result = strArray.join("");

  return result;
}

const replace_string = '__|----|_|-|____|--';

console.log(renameFunc(replace_string));
