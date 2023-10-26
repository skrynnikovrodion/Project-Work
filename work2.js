const lineOutput = (string) =>{
    let newString = '';
    let i = 1; 

    if (string.length > 5){
        newString = string.slice(0, 3) + string.slice(-3);

        return newString;
    }
    else 
   
    while (true){

        if (string.length < i){
            break;
        }

        newString = newString + string.slice(0,1);
        i++;
    }

    return newString;
}

const words = 'text';
console.log(lineOutput(words));
//Работает