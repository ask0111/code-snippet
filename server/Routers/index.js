const express = require("express");
const router = new express.Router();
const axios = require('axios');
require('dotenv').config();


const X_RAPIDE_API_KEY = process.env.X_RAPIDE_API_KEY;

router.get('/', (req, res)=>{
    res.send("Hare Krishna Welcome!");
});

var output = "hh";

async function fetchFunc(code){
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

      try {
        const response = await axios.request(options);
        console.log(response.data.output);
        return response.data.output;
      } catch (error) {
        console.error(error);
        return "error";
      }
}


router.post('/test', (req, res)=>{
    fetchFunc(req.body.code);
    console.log("done!", req.body.code);
    res.json("kk")
});

router.get('/test', async(req, res)=>{
    res.json(output);
})


module.exports = router;