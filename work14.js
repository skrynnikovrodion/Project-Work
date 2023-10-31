const getParams = (url = window.location) =>{
  let params = {};
  new URL(url).searchParams.forEach((val, location) => {
    params[location] = (params[location] !== undefined) ? 
    params[location] = (!Array.isArray(params[location])) ? 
    [params[location]] :
    params[location].push(val) :
    val;
  });

  return params;
}

const string = 'https://underscorejs.org?id=123&limit=5&offset=0';

console.log(getParams(string));
