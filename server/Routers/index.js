const express = require("express");
const router = new express.Router();
const CodeCollection = require("../db/model")
// const axios = require('axios');
require('dotenv').config();


const X_RAPIDE_API_KEY = process.env.X_RAPIDE_API_KEY;

router.get('/', (req, res)=>{
    res.send("Hare Krishna Welcome!");
});

var output = "hh";

// async function fetchFunc(code){
//     const options = {
//         method: 'POST',
//         url: 'https://online-code-compiler.p.rapidapi.com/v1/',
//         headers: {
//           'content-type': 'application/json',
//           'X-RapidAPI-Key': X_RAPIDE_API_KEY,
//           'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
//         },
//         data: {
//           language: 'python3',
//           version: 'latest',
//           code: code,
//           input: null
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         console.log(response.data.output);
//         const user = new Collection(response.data.output);
//         user.save();
//       } catch (error) {
//         console.error(error);
        
//       }
// }


router.post('/test', (req, res)=>{
    // fetchFunc(req.body.code);
    // const user = new CodeCollection({output: "dd", input: ""});
    // user.save().then(()=> console.log("yes"))
    // .catch((err) => res.status(500).json({ error: err.message }));
    console.log("got");
  });
  
  router.get('/test', async(req, res)=>{
    // const data = await CodeCollection.find();
    // res.send(data);
    console.log("get")
    res.send("lks")
})


module.exports = router;