const express = require("express");
const postAxios = require("./postAxios");
const router = new express.Router();



router.get('/', (req, res)=>{
    res.send("Hare Krishna Welcome!");
});

router.post('/test', postAxios, (req, res)=>{
    console.log(req.body);
    console.log(response.data, 'kl');
});

router.get('/test', (req, res)=>{
    res.send("")
});

module.exports = router;