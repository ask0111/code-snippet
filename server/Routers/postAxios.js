

const axios = require('axios');
require('dotenv').config();

const X_RAPIDE_API_KEY = process.env.X_RAPIDE_API_KEY;

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
    code: 'print("Hello, World!!");',
    input: null
  }
};

async function postAxios(){
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}

postAxios();