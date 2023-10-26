const getParams = (url = window.location) =>{
    let params = {};
    
    new URL(url).searchParams.forEach(function (val, key) {
        if (params[key] !== undefined) {

        if (!Array.isArray(params[key])) {
            params[key] = [params[key]];
        }

        params[key].push(val);
        } else {
            params[key] = val;
        }

    });

    return params;
}

const string = 'https://underscorejs.org?id=123&limit=5&offset=0';

console.log(getParams(string));

//Решено