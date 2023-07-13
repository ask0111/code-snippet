

const axios = require('axios');
require('dotenv').config();

const X_RAPIDE_API_KEY = process.env.X_RAPIDE_API_KEY;

function optionsFun(code){
    const options = {
        method: 'POST',
        url: 'https://online-code-compiler.p.rapidapi.com/v1/',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': X_RAPIDE_API_KEY,
          'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
        },
        data: {
          language: 'python3',
          version: 'latest',
          code: code,
          input: null
        }
      };
      return options;
}



module.exports = postAxios = async (req, res, next) =>{
    
try {
	const response = await axios.request(optionsFun(req.body.code));
	console.log(response.data);
    next();
} catch (error) {
	console.error(error);
}
}

module.exports = postAxiosOutput = (req, res, next)=>{
    next();
}