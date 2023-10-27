const examinationOutput = (string) =>{
    let newString = '';
    const stringlong = string.length; 
    
    if (string.length > 5){
        newString = string.slice(0, 3) + string.slice(-3);

        return newString;
    }else 
        
   for (let i = 1; i < long; i++) {
        newString = newString + string.slice(0,1);
    }

    return newString;
}

const words = 'text';
console.log(examinationOutput(words));
