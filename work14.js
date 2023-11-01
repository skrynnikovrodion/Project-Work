const getParams = (url = window.location) =>{
  let params = {};
  
  new URL(url).searchParams.forEach((val, location) => {
    params[location] = (params[location] !== undefined) ?      //Проверка на определенность
    params[location] = (!Array.isArray(params[location])) ?    //если не определен, то идет проверка не является ли массивом params
    [params[location]] :                                       //если не является массивом, то станет массивом
    params[location].push(val) :                               //если является массивом, то пушим в массив обьекты
    val;                                                       //если params определен, то равен val
  });

  return params;
}

const string = 'https://underscorejs.org?id=123&limit=5&offset=0';

console.log(getParams(string));
