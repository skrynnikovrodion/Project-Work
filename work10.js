const replaceFunc = (string) =>{

    let newMaString = [];

    for (let i = 0; i < string.length; i++){

        if (string[i] == '_'){
            
            newMaString.push(0);
        }

        if (string[i] == '-'){
            
            newMaString.push(1);
        }
    }

    const result = newMaString.join("");

    return result;
}

const replace_string = '__|----|_|-|____|--';

console.log(replaceFunc(replace_string));
