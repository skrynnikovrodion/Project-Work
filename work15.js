const longArray = (length) =>{
    let arr = [];
    const string = "x";
    let text = "";

    for (let i = 0; i < length; i++){
        
        text += string;
        arr += text + "\n";
    }

    return arr;
}

let long = 7;

console.log(longArray(long));
