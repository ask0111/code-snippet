

// const axios = require('axios');
// require('dotenv').config();

// const X_RAPIDE_API_KEY = process.env.X_RAPIDE_API_KEY;

// function postAxiosOptions(code) {
//   const options = {
//     method: 'POST',
//     url: 'https://online-code-compiler.p.rapidapi.com/v1/',
//     headers: {
//       'content-type': 'application/json',
//       'X-RapidAPI-Key': X_RAPIDE_API_KEY,
//       'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
//     },
//     data: {
//       language: 'python3',
//       version: 'latest',
//       code: code,
//       input: null
//     }
//   };
//   return options;
// }
// module.exports = postAxios = async (req, res, next) => {
//   console.log("jaja", req.body.code);
//   try {
//     const response = await axios.request(postAxiosOptions(req.body.code));
//     req.resp = response.data;
//     next();
//   } catch (error) {
//     console.error(error);
//   }

// }



// function postAxiosOutputOptions(){
  
//   return options;
// }
// module.exports = postAxiosOutput = async(req, res, next) => {
//   try {
//     const response = await axios.request(postAxiosOutputOptions());
//     // console.log(response.data, 'klj')
//     res.result = response.data.output;
//     next();
//   } catch (error) {
//     console.error(error);
//   }
//   next();
// }